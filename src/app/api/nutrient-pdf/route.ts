import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, images = [], fileName = "document.jpg", instructions } = await req.json();

    const allImages: Array<{ base64: string; name?: string }> = [];
    if (images && Array.isArray(images) && images.length > 0) {
      images.forEach((img: any) => {
        if (typeof img === "string") allImages.push({ base64: img });
        else if (img.base64) allImages.push(img);
      });
    } else if (imageBase64) {
      allImages.push({ base64: imageBase64, name: fileName });
    }

    if (allImages.length === 0) {
      return NextResponse.json({ error: "At least one image is required" }, { status: 400 });
    }

    const apiKey = process.env.NUTRIENT_API_KEY || "pdf_live_bYCTCKI8udBowUTKYYA01MRfh58mj7uhjFbuVJ1uwnI";
    const formData = new FormData();
    const parts: any[] = [];

    allImages.forEach((imgObj, idx) => {
      const fieldName = `file_${idx}`;
      const mimeMatch = imgObj.base64.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);
      const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";
      const cleanBase64 = imgObj.base64.replace(/^data:[a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+;base64,/, "");
      const imageBuffer = Buffer.from(cleanBase64, "base64");
      const blob = new Blob([imageBuffer], { type: mimeType });
      formData.append(fieldName, blob, imgObj.name || `image_${idx + 1}.jpg`);
      parts.push({ file: fieldName });
    });

    // Nutrient DWS build instructions for merging all images into one PDF
    const buildInstructions = instructions || { parts };
    formData.append("instructions", JSON.stringify(buildInstructions));

    const nutrientResponse = await fetch("https://api.nutrient.io/api/build", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    });

    if (!nutrientResponse.ok) {
      const errText = await nutrientResponse.text();
      console.error("Nutrient API error:", errText);
      return NextResponse.json(
        { error: `Nutrient PDF engine error: ${nutrientResponse.status}` },
        { status: nutrientResponse.status }
      );
    }

    const pdfArrayBuffer = await nutrientResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfArrayBuffer).toString("base64");
    const dataUri = `data:application/pdf;base64,${pdfBase64}`;

    return NextResponse.json({
      success: true,
      pdfDataUri: dataUri,
      fileName: fileName.replace(/\.[^/.]+$/, "") + ".pdf",
      size: pdfArrayBuffer.byteLength,
    });
  } catch (error: any) {
    console.error("Error in Nutrient PDF conversion:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
