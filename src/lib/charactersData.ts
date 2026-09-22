export interface AICharacter {
  id: string;
  name: string;
  description: string;
  image: string;
  style: string;
  gender: string;
  tags: string[];
  prompt: string;
  aspectRatio: string;
  isOfficial?: boolean;
}

export const ALL_CHARACTERS: AICharacter[] = [
  {
    "id": "mediaio-1909205603236446250",
    "name": "Ava Monroe",
    "description": "NYC’s viral futuristic fashion icon, known for liquid-metal looks and cyber aesthetics. Blending Y2K, avant-garde couture, and digital art, she embodies a cold yet powerful “future queen” energy dominating youth trend culture.",
    "image": "/characters/ava_monroe.png",
    "style": "Hyper-Realistic Cyber & Editorial",
    "gender": "Female",
    "tags": [
      "Media.io Official",
      "Cyberpunk",
      "Futuristic",
      "Fashion Model",
      "Y2K Avant-Garde"
    ],
    "prompt": "High-end editorial fashion photography of Ava Monroe, NYC’s viral futuristic fashion icon, known for liquid-metal looks and cyber aesthetics. Blending Y2K, avant-garde couture, and digital art, she embodies a cold yet powerful “future queen” energy dominating youth trend culture., shot on 85mm f/1.4 lens, 8k resolution, photorealistic studio lighting, avant-garde textures.",
    "aspectRatio": "3:4",
    "isOfficial": true
  },
  {
    "id": "mediaio-1909205865309155388",
    "name": "Evelyn Hart",
    "description": "NYC-based rising fashion star, celebrated for flowing neutral layers and sculptural silhouettes. Fusing bohemian ease, avant-garde tailoring, and soft textures, she radiates a serene yet commanding “ethereal muse” energy shaping contemporary style culture.",
    "image": "/characters/evelyn_hart.png",
    "style": "Hyper-Realistic Cyber & Editorial",
    "gender": "Female",
    "tags": [
      "Media.io Official",
      "Cyberpunk",
      "Futuristic",
      "Fashion Model",
      "Y2K Avant-Garde"
    ],
    "prompt": "High-end editorial fashion photography of Evelyn Hart, NYC-based rising fashion star, celebrated for flowing neutral layers and sculptural silhouettes. Fusing bohemian ease, avant-garde tailoring, and soft textures, she radiates a serene yet commanding “ethereal muse” energy shaping contemporary style culture., shot on 85mm f/1.4 lens, 8k resolution, photorealistic studio lighting, avant-garde textures.",
    "aspectRatio": "3:4",
    "isOfficial": true
  },
  {
    "id": "mediaio-1909205972926599182",
    "name": "Nova Sterling",
    "description": "Nova Sterling is a fashion model known for her edgy cyber-street style and bold, futuristic looks. She blends Y2K and industrial influences, creating a striking, trend-setting presence in editorial and runway fashion.",
    "image": "/characters/nova_sterling.png",
    "style": "Hyper-Realistic Cyber & Editorial",
    "gender": "Female",
    "tags": [
      "Media.io Official",
      "Cyberpunk",
      "Futuristic",
      "Fashion Model",
      "Y2K Avant-Garde"
    ],
    "prompt": "High-end editorial fashion photography of Nova Sterling, Nova Sterling is a fashion model known for her edgy cyber-street style and bold, futuristic looks. She blends Y2K and industrial influences, creating a striking, trend-setting presence in editorial and runway fashion., shot on 85mm f/1.4 lens, 8k resolution, photorealistic studio lighting, avant-garde textures.",
    "aspectRatio": "3:4",
    "isOfficial": true
  },
  {
    "id": "banana-94217bcd-4143-4004-8f53-abdccd68e2bf",
    "name": "Tocha Flamejante",
    "description": "Um homem musculoso, atlético e com musculos definidos e volumosos, sem camisa (use a referência da imagem carregada para o rosto, seja 100% fiel) com cabelo escuro e ondulado e abdominais definidos, vestindo shorts de co...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/TOCHA_FLAMEJANTE.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Um homem musculoso, atlético e com musculos definidos e volumosos, sem camisa (use a referência da imagem carregada para o rosto, seja 100% fiel) com cabelo escuro e ondulado e abdominais definidos, vestindo shorts de cor clara, em pé com água na altura da cintura em água escura à noite. Ele está segurando uma tocha flamejante em sua mão direita, iluminando seu corpo com um brilho quente e tremeluzente. Ele está olhando para o lado com uma expressão determinada. O fundo é um céu noturno escuro e sem lua e água escura. Iluminação dramática, cinematográfico, hiper-realista, brilho de tocha, tema de aventura, 8k",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-01931fda-8cf1-47f5-9643-bbd8f0588f42",
    "name": "Realistic image",
    "description": "A slim-fit 5'7 young man walking down stone steps,\\\\r\\\n\\\\r\\\nwearing a relaxed white linen shirt with the top buttons casually open, light blue straight-fit jeans, and clean white Nike Air Force 1 sneakers. He accessorize...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/Realistic_image.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A slim-fit 5'7 young man walking down stone steps,\\\\r\\\n\\\\r\\\nwearing a relaxed white linen shirt with the top buttons casually open, light blue straight-fit jeans, and clean white Nike Air Force 1 sneakers. He accessorizes with a silver wristwatch and narrow-frame rectangular classy sunglasses. The outfit gives off a minimal, effortless, and summery vibe, captured in natural daylight with soft shadows and a cinematic film tone, as if taken from a Leica cinema-grade camera with an 85mm prime lens.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-8a507e10-bbed-4ec9-b238-62a45e736d55",
    "name": "Monochromatic minimal elegant",
    "description": "Recreate this scene using my submitted photo as a reference, maintaining the same framing, pose, lighting, and style as the example image.\n\nThe composition should show a half-length **male** portrait, with the model sitt...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/MONOCHROMATIC_MINIMAL_ELEGANT.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Recreate this scene using my submitted photo as a reference, maintaining the same framing, pose, lighting, and style as the example image.\n\nThe composition should show a half-length **male** portrait, with the model sitting and leaning slightly forward. The right arm should cross the body, with the left hand resting gently on the opposite arm, conveying elegance and confidence.\n\nThe facial expression should be serene, confident, and slightly enigmatic. The gaze should be directed toward the camera, with lips softly closed and a firm posture.\n\nThe outfit consists of a dark, sophisticated ensemble—a structured **black blazer** worn over a **fitted black shirt (or T-shirt/sweater)**. **The hair should be neatly groomed and styled appropriately for a man (e.g., short, slicked back, or a modern cut and wearing Sunglasses).**\n\nThe lighting should be studio-style, with soft, contrasting directional light (Rembrandt-style or sidelight), highlighting the contours of the face, creating elegant shadows and a subtle gradient in the background.\n\nThe background should be smooth and neutral, in dark gray tones, with slight depth and no distracting elements. \n\nThe final style should be black and white, with refined contrast, smooth skin texture, and a realistic editorial portrait look.\n\nVertical format (1080x1920), portrait aspect ratio, professional studio photo quality, and a cinematic, realistic finish.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-a859d3c0-8de7-4d1b-b77d-b140e00cd6a0",
    "name": "Shelby GT500 Night Portrait",
    "description": "A hyper-realistic cinematic portrait of a 190cm tall man (same face as reference) leaning casually against a modified orange Ford Mustang Shelby gt500 with neon under glow. The photo is taken at night under a single warm...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/SHELBY_GT500_NIGHT_PORTRAIT.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A hyper-realistic cinematic portrait of a 190cm tall man (same face as reference) leaning casually against a modified orange Ford Mustang Shelby gt500 with neon under glow. The photo is taken at night under a single warm streetlight, with reflections glimmering on the car’s polished surface. The man faces directly toward the camera with a calm, confident expression. Shot from a high angle looking down, captured using a Canon EOS R5 with 85mm lens, f/1.4, ISO 400, 8K resolution. Neon blue and magenta hues blend across the car body and pavement, creating a deep cinematic atmosphere with soft shadows and lens bokeh.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-a7766546-323c-4c10-a25f-491400943b59",
    "name": "Doble exposición",
    "description": "Basándote en nuestra foto sin cambiar los rostros, crea una fotografía de doble exposición o superposición. Una imagen es la silueta transparente y magnificada de la pareja, y la otra es una escena más pequeña y definida...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/Doble_exposición.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Basándote en nuestra foto sin cambiar los rostros, crea una fotografía de doble exposición o superposición. Una imagen es la silueta transparente y magnificada de la pareja, y la otra es una escena más pequeña y definida donde están parados sobre la orilla del mar.\n• Primer Plano (Pareja Pequeña): La pareja se encuentra de pie enfrente a la orilla del mar.\n•Vestuario del hombre: traje sastre negro, camisa de vestir negra y mocasines de cuero negros.\nVestuario de la mujer: Vestido de noche negro sin tirantes con abertura alta, combinado con tacones negros. Cabello castaño largo, ligeramente ondulado\n• El hombre abraza suavemente a la mujer por la cintura, y ella tiene sus manos sobre las de él. Ambos se miran con una expresión de afecto.\n• La luz es suave y difusa, creando una atmósfera brumosa.\n• Fondo (Superposición Grande): Los rostros y torsos de la pareja aparecen en un tamaño muy grande y transparente, superpuestos a la escena del bote. Se están mirando y la mujer sostiene un objeto o su mano cerca del r",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-ab478028-4f76-4f8d-9e5c-a7ad14593c30",
    "name": "Gini",
    "description": "Maintain the same face and person (use attached photo for accurate face\\\\r\\\n\\\\r\\\n‎Hyper-realistic cinematic Create an 8k photorealistic image using the attached photo. A close-up portrait of a woman with long, jet-black,...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/GINI.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Maintain the same face and person (use attached photo for accurate face\\\\r\\\n\\\\r\\\n‎Hyper-realistic cinematic Create an 8k photorealistic image using the attached photo. A close-up portrait of a woman with long, jet-black, slightly wind-swept hair falling across her face. Her striking, light-colored eyes gaze upwards and to the right, catching a sharp, diagonal beam of natural light that illuminates the high points of her cheekbone, nose, and plump, glossy, mauve-toned lips a slightly light weight silk",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-cb8cbddf-d8ab-4aa6-b157-d2ec5a589575",
    "name": "Urban Reflection in Dramatic Light",
    "description": "Dramatic, ultra-realistic close-up in black and white with high-contrast cinematic lighting from the side, highlighting the contours of his face and beard, casting deep shadows. He wears round, reflective sunglasses. He ...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/URBAN_REFLECTION_IN_DRAMATIC_LIGHT.webp",
    "style": "Midjourney v6.1",
    "gender": "Unisex",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Unisex"
    ],
    "prompt": "Dramatic, ultra-realistic close-up in black and white with high-contrast cinematic lighting from the side, highlighting the contours of his face and beard, casting deep shadows. He wears round, reflective sunglasses. He gazes confidently upward into a dark void. The sunglasses reflect a city's towering skyline. The atmosphere is mysterious with a minimalist black background. Details in 4K. Keep the subject's exact facial structure, hair texture, the original photo.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-a1d98d08-d3c2-4e92-9b13-e66acdd033a2",
    "name": "Horse Rider in Golden Daylight",
    "description": "A realistic outdoor portrait of a man confidently riding a majestic black horse in a green open field. The man wears a stylish casual outfit — a Black shirt with rolled-up sleeves and black jeans. He looks composed and n...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/Horse_Rider_in_Golden_Daylight.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A realistic outdoor portrait of a man confidently riding a majestic black horse in a green open field. The man wears a stylish casual outfit — a Black shirt with rolled-up sleeves and black jeans. He looks composed and natural, holding the reins with a relaxed posture, sitting upright on the saddle. The background shows soft-focus tall trees and subtle city buildings in the distance. The lighting is bright and natural, with a cinematic depth and warm daylight tones. Use my reference image for the face identity while keeping the same pose, outfit, and overall look. Ultra-realistic, 4K detail, editorial photography style, shallow depth of field, --ar 3:2 --v 6 --style raw --q 2",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-66db5714-0240-4071-ac1b-b3a4fab78155",
    "name": "Propt moto esportiva",
    "description": "Crie uma imagem minha [foto enviada em anexo] um retrato ultra-realista. Eu estou sentado em uma Moto esportiva preta brilhante em uma área ao ar livre contra o fundo de árvores verdes. Eu uso uma camiseta preta solta, j...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/PROPT_MOTO_ESPORTIVA.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Crie uma imagem minha [foto enviada em anexo] um retrato ultra-realista. Eu estou sentado em uma Moto esportiva preta brilhante em uma área ao ar livre contra o fundo de árvores verdes. Eu uso uma camiseta preta solta, jeans escuros soltos com dobras na parte inferior e tênis Nike preto e branco. Os acessórios usados incluem um relógio preto. Minha mão esquerda descansou casualmente em sua coxa, enquanto sua mão direita descansou na moto enquanto segurava um capacete preto brilhante com uma viseira transparente.\\\\r\\\nA moto parece detalhada com um motor grande, quadro forte e detalhes cromados brilhantes, acentuando a impressão moderna e poderosa. O fundo mostra árvores altas com luz natural suave, criando uma mistura equilibrada de sombra e luz. A expressão é calma e confiante, olhando diretamente para\\\\r\\\na câmera. O estilo geral é cinematográfico e moderno, combinando a sensação de streetwear jovem com a presença de uma motocicleta arrojada. Alta resolução, estilo editorial fotorrealista.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-bb38cd44-7dc9-4f66-960f-63c9f8598858",
    "name": "realistic painting with abstract background",
    "description": "A highly detailed and realistic fine art painting of a person with the same exact facial features as the original photo. The painting should be in the style of a classical or photorealistic oil painting, with smooth brus...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/REALISTIC_PAINTING_WITH_ABSTRACT_BACKGROUND.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A highly detailed and realistic fine art painting of a person with the same exact facial features as the original photo. The painting should be in the style of a classical or photorealistic oil painting, with smooth brushstrokes and a high level of detail, particularly on the face. The subject should have cinematic color grading and bright lighting that highlights their face.The background should be an abstract painting on a canvas, with colors that complement the subject, but it should not be pure white. The lighting should be dramatic and highlight the edges of the person to separate the subject from the background.The subject should be expertly mingled with the background, seamlessly integrating with the scene. The overall image must have the high-quality, non-digital feel of a traditional painting, with no artifacts from a screenshot or digital editing. The final output image must be in a 16:9 landscape ratio with their face matched. face match 100%.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-ec988b71-6978-41b3-a2cf-ccf467d59ac5",
    "name": "Selfie",
    "description": "Ultra-realistic mirror selfie of a me (uploaded pic)with glasses.\\\\r\\\nHe is wearing a loose brown sweater layered over a crisp white T-shirt, paired with blue jeans.\\\\r\\\nA silver chain necklace adds a subtle accessory to...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/SELFIE.webp",
    "style": "Midjourney v6.1",
    "gender": "Unisex",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Unisex"
    ],
    "prompt": "Ultra-realistic mirror selfie of a me (uploaded pic)with glasses.\\\\r\\\nHe is wearing a loose brown sweater layered over a crisp white T-shirt, paired with blue jeans.\\\\r\\\nA silver chain necklace adds a subtle accessory touch. He holds a new modern iPhone 17 smartphone orange colour in one hand, partially covering his face, while his other hand rests casually in his pocket.\\\\r\\\nThe scene is set in warm indoor lighting, creating a cinematic, moody atmosphere with soft shadow",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-ee3f7a85-efc3-49b7-88b2-cd81fea88a0e",
    "name": "foto realista",
    "description": "Using the reference image, recreate the same woman with an identical face, body, and tattoos, in a [The captured environment is a rocky coastal cove or bay, viewed from a luxury boat, under strong sunlight. The sea has a...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/foto_realista.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Using the reference image, recreate the same woman with an identical face, body, and tattoos, in a [The captured environment is a rocky coastal cove or bay, viewed from a luxury boat, under strong sunlight. The sea has an intense and vibrant turquoise blue color, with the calm surface reflecting the sunlight in a sparkling way. In the background, an imposing, light-colored rock formation rises vertically from the water. The lighting is strong and direct (hard light), typical of a sunny day, creating high contrast and enhancing saturation. The photo is taken aboard a leisure boat or speedboat, with a cream-colored upholstered seat and polished dark wood trim on the edge. A metallic handrail is present, and small vessels are visible in the distance. The atmosphere is one of luxury holidays and seaside leisure.]. She is wearing [The model is wearing a two-piece royal blue or cobalt blue bikini set. The top is an asymmetrical strapless model, featuring a unique and wide strap that goes over the right shoulder, while the front has a twisted or knotted central detail, creating a ruching effect. The bottom is a classic or slightly high-cut thong model, with medium to thin side straps, complementing the set's design.], with [The model wears sunglasses with thin frames, possibly metallic and golden, in a hexagonal or slightly rounded shape, with dark and lightly mirrored lenses. She wears small, rectangular earrings, in a discreet hoop style, in a golden tone. Complementing this, there is a mix of layered golden necklaces: a shorter one with a circular or coin pendant and a longer one with a thin chain and a simple pendant. On her right wrist, she wears a thin black bracelet, similar to a hair tie or silicone wristband. Her hair is dark, medium to long length, loose with a subtle central parting, and the front side strands are pulled back behind her ears. The strands have a smooth to slightly wavy texture, with a natural and possibly wet or wet-look appearance at the roots, typical of a marine environment.]. Pose: [The model is kneeling on the boat's seat, with her torso slightly leaning back and her body facing the camera. This kneeling posture elevates her upper body, subtly lengthening her torso. Her arms are relaxed and resting on the boat's structure: the left one is flexed, with her hand resting on the wooden edge near her thigh, and the right one is also resting on the side of the vessel. Her head is upright, and her chin is subtly raised, directing her direct and fixed gaze towards the camera with an expression of confidence and seriousness. The overall pose is relaxed but intentional, fitting the model perfectly into the leisure setting and conveying a tranquil style under the sun.]. Lighting: [The lighting is studio, predominantly soft and diffuse, characterized by the absence of harsh shadows and smooth transitions of light and shadow, indicating the use of large modifiers such as softboxes. The contrast is low to medium, ensuring that the model and clothing details are visible without overly dark shadow areas. The main light is positioned frontally and slightly above the model for even and flattering illumination. It is complemented by a weaker fill light, which lifts shadows and maintains overall low contrast. There is, subtly, an edge light to create a slight separation of the model from the gray background and add dimensionality. The light color is neutral and balanced, ensuring clean and accurate color reproduction. Technically, it is a studio lighting scheme aimed at maximum clarity and detail.]. Ultra-realistic photography, 8K resolution, 50mm lens, shallow depth of field, professional fashion editorial style.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-e27cf2e4-b2f7-4d8c-8cc9-f302f9bd713c",
    "name": "🌇🧱 Editorial Theme: “Concreto ao Entardecer”",
    "description": "Conceito\nUm retrato editorial masculino capturado em plano fechado no topo de um campus durante o fim de tarde. O modelo — com cabelo levemente agitado pelo vento — veste uma camiseta branca oversized com estampa gráfica...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/Editorial_Theme_Concreto_ao_Entardecer.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Conceito\nUm retrato editorial masculino capturado em plano fechado no topo de um campus durante o fim de tarde. O modelo — com cabelo levemente agitado pelo vento — veste uma camiseta branca oversized com estampa gráfica e calça cargo preta. Ele está encostado em uma parede de concreto branco, com o rosto voltado para o lado e a cabeça levemente inclinada para cima. O céu ao fundo exibe nuvens em tons de rosa e roxo profundo, criando uma atmosfera suave e contemplativa. A composição transmite leveza urbana, introspecção e estilo cotidiano com toque editorial.\n\n🎥 Especificações Técnicas\nCâmera: Canon EOS R5\n\nLente: 85mm f/1.4 — ideal para retratos com profundidade emocional e foco preciso\n\nAbertura: f/2.2\n\nISO: 320\n\nVelocidade do obturador: 1/250s\n\nEnquadramento: vertical (formato 19:16), plano fechado do rosto até a linha da cintura\n\nÂngulo da câmera: lateral, com leve inclinação — destaca a silhueta e o fundo celeste\n\nResolução: Ultra-HD 8K — textura da pele, tecido e luz capturados com realismo extremo\n\nIluminação: luz natural suave do pós-pôr do sol — cria sombras delicadas e brilho difuso\n\nEstilo visual: editorial urbano com estética suave, contemplativa e realista\n\n🧍‍♂️ Pose Principal: “Encostado em Silêncio”\nPostura: o modelo está encostado na parede de concreto, com o corpo relaxado e a cabeça levemente inclinada para cima\n\nExpressão: serena e introspectiva — transmite contemplação e leveza\n\nDestaques: contraste entre o branco da parede e o céu colorido, cabelo ao vento, composição centrada no rosto\n\n👕 Detalhes do Look\nCamiseta: branca oversized com estampa gráfica — visual urbano e descontraído\n\nCalça: cargo preta, com bolsos laterais — reforça a estética street\n\nTênis: não visível — foco no plano fechado\n\nAcessórios: nenhum visível — foco total na expressão e na luz\n\nCabelo: cacheado, levemente agitado pelo vento\n\nBarba: aparada — reforça o visual maduro e estilizado\n\n🌟 Destaques Visuais\nParede de concreto branco: base visual neutra que destaca o modelo\n\nCéu rosa e roxo: fundo atmosférico que adiciona profundidade e emoção\n\nPaleta de Cores: branco, preto, rosa, roxo e tons de pele — suave, urbana e contemplativa\n\nMood: introspectivo, leve e realista — ideal para editoriais de moda cotidiana, campanhas de lifestyle urbano ou retratos para redes sociais",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-a1f7c8fc-ddd0-4fee-b3ea-e8367c72fd2e",
    "name": "Dark Studio",
    "description": "A cinematic portrait of a man (use the uploaded picture as reference for the face) sitting confidently on a round black beanbag chair against a dark gradient background. He wears a black hoodie with the sleeves slightly ...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/DARK_STUDIO.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A cinematic portrait of a man (use the uploaded picture as reference for the face) sitting confidently on a round black beanbag chair against a dark gradient background. He wears a black hoodie with the sleeves slightly pushed up, black cargo pants, and clean white sneakers. A silver wristwatch is visible on his left wrist. His pose is relaxed and strong elbows resting on his knees, hands hanging loosely between his legs. He has a calm, slight smiling facial expression. The lighting is dramatic and directional, illuminating his face, sneakers, and upper body while the background fades into darkness. The atmosphere is modern, minimalist, and powerful, with a studio photography style and high contrast.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-c98c50bf-578f-4dd4-a97e-2079d4a8a08e",
    "name": "A stylish man leaning casually",
    "description": "A hyper-realistic cinematic portrait of the uploaded man. Use precise ID locking to preserve his precise facial features, hairstyle, skin tone, body proportions, age, and expressions with 100% accuracy. \\\\r\\\nA stylish ma...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/A_STYLISH_MAN_LEANING_CASUALLY.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A hyper-realistic cinematic portrait of the uploaded man. Use precise ID locking to preserve his precise facial features, hairstyle, skin tone, body proportions, age, and expressions with 100% accuracy. \\\\r\\\nA stylish man leaning casually against a stone building wall on a sunlit city street in the late afternoon. He wears a dark denim overshirt unbuttoned over a white T-shirt with bold red letters, beige pleated trousers with a relaxed fit, and tan suede sneakers with white stripes. A keychain hangs from his belt loop, and he accessorizes with a dark baseball cap, black sunglasses, a wristwatch, and a neat mustache. The sunlight creates warm golden tones, casting soft shadows on the wall and pavement. The atmosphere feels cinematic, urban, and effortlessly cool, with a vintage 90s aesthetic and natural golden-hour lighting.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-3be7c684-da85-41bc-b42e-e86faf1a457d",
    "name": "Studio",
    "description": "A confident man in a navy blue tailored suit with a white shirt, no tie, adjusting his cufflinks. He wears aviator sunglasses, a gold wristwatch, and a small lapel pin. The background is a smooth warm brown/olive studio ...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/STUDIO.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "A confident man in a navy blue tailored suit with a white shirt, no tie, adjusting his cufflinks. He wears aviator sunglasses, a gold wristwatch, and a small lapel pin. The background is a smooth warm brown/olive studio backdrop with soft gradient lighting. Studio lighting is dramatic yet balanced, with a key light from the upper left casting subtle shadows. Editorial fashion portrait, waist-up, cinematic and luxurious style.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-a1ef4de9-36c5-449e-8a5c-ec0cddb11a9e",
    "name": "Instinct and Spirit",
    "description": "Create a realistic and emotional scene showing a man (use the provided image for accurate facial features) and a lion face to face in a moment of connection and respect. The man's eyes are closed, with a serene expressio...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/INSTINCT_AND_SPIRIT.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Create a realistic and emotional scene showing a man (use the provided image for accurate facial features) and a lion face to face in a moment of connection and respect. The man's eyes are closed, with a serene expression, while the lion gently rests its forehead and muzzle against his, conveying trust and a spiritual bond.\nBoth are standing on ground covered in light snow, with snowflakes gently falling. The man wears a dark coat and hair slightly tousled by the wind, and the lion displays a thick, majestic mane.\nIn the background, a cold, misty natural landscape with blurred mountains and gray tones reinforces the calm and powerful atmosphere.\nThe lighting is soft and diffuse, highlighting the textures of the skin, fur, and coat, creating a cinematic and poetic atmosphere.\nThe composition should convey friendship, courage, and harmony between man and nature.\n\nSuggested settings:\nStyle: Ultra-realistic, cinematic, 8K\nLighting: Soft, diffuse, natural winter light\nCamera: Medium close-up, focus on expressions\nEmotion: Connection, respect, tranquility\nSetting: Falling snow, blurred background with mountains",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-d4f29585-781d-4023-bf33-4b7f4b64987c",
    "name": "in the water",
    "description": "Edit This close-up photograph of a man submerged underwater, half of his body exposed from chest to head, occupies the center frame. He appears to be of Arab descent, with a serious expression. His eyes are open and dire...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/IN_THE_WATER.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Edit This close-up photograph of a man submerged underwater, half of his body exposed from chest to head, occupies the center frame. He appears to be of Arab descent, with a serious expression. His eyes are open and directed towards the viewer. He appears shirtless. The water's surface, with its manipulated light, creates caustic patterns on his skin. Slightly suspended water droplets and bubbles add depth. Cinematic lighting with soft shadows and sharp highlights, and realistic textures create an intricate pattern of light and shadow on his face and upper body. The background is a color gradient between greenish-blue and dark blue, with scattered air bubbles, suggesting a deep environment. The lighting is diffused, casting soft shadows, enhancing the underwater atmosphere. The overall style of the image is photographic and realistic, with an emphasis on capturing the details of the water's effect on the person in 4k resolution.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-e4eb7614-7466-4d1e-830c-1386361443b7",
    "name": "Couple Polaroid",
    "description": "Take a photo taken with a Polaroid camera. The photo should look like an ordinary photograph, without an explicit subject or property. The photo should have a slight blur and a consistent light source, like a flash from ...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts/COUPLE_POLAROID.webp",
    "style": "Midjourney v6.1",
    "gender": "Female",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Female"
    ],
    "prompt": "Take a photo taken with a Polaroid camera. The photo should look like an ordinary photograph, without an explicit subject or property. The photo should have a slight blur and a consistent light source, like a flash from a dark room, scattered throughout the photo. Don't change the face. Change the background behind those two people with white curtains. With that boy and me make a cute poses. Make the boy holding a red coca cola can and girl a burger.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-6092a2f0-bc50-415f-bc1f-1ab1b3373d46",
    "name": "Retrato em Preto e Branco",
    "description": "Um retrato cinematográfico em preto e branco meu, mantendo meu rosto real inalterado. Estou de perfil, encostado em uma parede lisa com uma postura relaxada, mas elegante. Minha cabeça está ligeiramente inclinada para tr...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/RETRATO_EM_PRETO_E_BRANCO.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Um retrato cinematográfico em preto e branco meu, mantendo meu rosto real inalterado. Estou de perfil, encostado em uma parede lisa com uma postura relaxada, mas elegante. Minha cabeça está ligeiramente inclinada para trás, queixo levantado e olhos fechados, transmitindo uma sensação de calma e introspecção. Meu braço esquerdo repousa naturalmente ao longo do corpo, enquanto meu braço direito está dobrado, segurando um copo transparente na altura da cintura com uma pegada leve. Estou vestindo uma camisa social branca bem ajustada com as mangas casualmente arregaçadas até os cotovelos; o tecido está ligeiramente esticado no peito e nos braços, enfatizando uma silhueta sob medida. A camisa está bem dobrada dentro de calças escuras e bem ajustadas, presas com um cinto preto fino.\n​Sem acessórios adicionais, o visual permanece atemporal e minimalista. A iluminação é dramática e de alto contraste, com realces suaves acentuando os contornos do rosto, as dobras da camisa e o copo, enquanto sombras profundas intensificam o clima da cena. Os tons monocromáticos criam uma estética clássica e refinada.\n​Estilo: atemporal, fotografia em preto e branco, cinematográfico, melancólico e elegante, editorial de moda, retrato de modelo profissional, mesmo rosto.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-d559a1e2-c45e-4a6c-87d8-099a68125e55",
    "name": "braços erguidos atrás da cabeça",
    "description": "Crie uma imagem realista com o MEU ROSTO e a MINHA APARÊNCIA exatamente como na foto que enviei — não mude absolutamente nenhuma das minhas características físicas (rosto, traços, formato dos olhos, nariz, boca, pele, ca...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/BRAÇOS_ERGUIDOS_ATRÁS_DA_CABEÇA.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Crie uma imagem realista com o MEU ROSTO e a MINHA APARÊNCIA exatamente como na foto que enviei — não mude absolutamente nenhuma das minhas características físicas (rosto, traços, formato dos olhos, nariz, boca, pele, cabelo, corpo etc). Apenas replique o estilo e a composição da imagem abaixo com fidelidade.\n\nA pessoa deve estar com os braços erguidos atrás da cabeça, em uma pose confiante e sensual. A iluminação deve vir de uma janela, projetando faixas de luz e sombra no rosto e no corpo, criando um contraste dramático e artístico. A luz deve destacar principalmente os olhos e o brilho natural da pele.\n\nO fundo deve ser simples e neutro, em tom claro, para manter o foco no rosto. O clima geral da imagem precisa ser intimista, elegante e cinematográfico, com um toque de mistério e intensidade no olhar.\n\nA maquiagem deve ser natural e iluminada, com pele glow e lábios com leve brilho. Os cabelos devem estar soltos, com aparência natural e volume suave. A roupa deve ser uma blusa preta com alças, deixando os ombros à mostra.\n\nImportante: mantenha 100% das minhas características reais — não altere o formato do rosto, olhos, nariz, boca, cor da pele, cabelo ou qualquer traço físico meu. Apenas insira minha aparência nessa mesma pose, iluminação e estilo descritos",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-c07afbb3-661f-4eb1-84f6-abcf0cd0d944",
    "name": "Work Profile",
    "description": "Create a realistic professional portrait of a man sitting at an office desk with a laptop and documents in front of him. The man’s face should be based on the reference photo provided, keeping the same facial structure, ...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/WORK_PROFILE.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Create a realistic professional portrait of a man sitting at an office desk with a laptop and documents in front of him. The man’s face should be based on the reference photo provided, keeping the same facial structure, hairstyle, and expression.\\\\r\\\nHe is wearing a light beige blazer over a light blue shirt, sitting confidently in a modern office environment with natural lighting and a soft background including a plant and a picture frame.\\\\r\\\nThe overall vibe should be clean, professional, and elegant, like a business executive headshot.\\\\r\\\nHigh resolution, cinematic lighting, realistic textures, detailed depth of field.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-aa6f0c7e-b150-41aa-87e1-ef79a257cf33",
    "name": "The Stairwell",
    "description": "cinematic black and white photograph with faint nicotine-yellow and rust-red tones bleeding into highlights and midtones, evoking aged tungsten light and cigarette smoke, inspired by film noir and German Expressionism, i...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/THE_STAIRWELL.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "cinematic black and white photograph with faint nicotine-yellow and rust-red tones bleeding into highlights and midtones, evoking aged tungsten light and cigarette smoke, inspired by film noir and German Expressionism, interior of an old decaying house with a wooden staircase and ornate railing, diagonal expressionist shadows cast by a strong single light source, a man in a dark hooded jacket and cargo pants stands halfway up the stairs, hands in pockets, no hat, expression somber and introspective, atmosphere of solitude, guilt, and spiritual purgatory, chiaroscuro lighting with high contrast between light and darkness, beam of light cutting through the air like a confession, dust or haze visible, psychological tension and silence thick as smoke, film grain texture, 85mm lens look, f/1.8 cinematic depth of field, ISO 800, subtle vignette, soft highlight roll-off, volumetric light rays, contrast +25, shadows +10, style reminiscent of The Third Man, The Innocents, Angel Heart, and Detour, 1940s–1980s hybrid noir aesthetic, expressionist geometry of shadow and light, mood of existential dread, metaphysical tension, and haunting beauty.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-4acda2a0-7f99-44f0-a101-40de01021fb7",
    "name": "Luxury Style Photo",
    "description": "Edit this image to show a men positioned in a close-up portrait shot, face tilted slightly upward at approximately 15-20 degrees with her chin gently lifted, creating a confident, aspirational angle. His head is centered...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/LUXURY_STYLE_PHOTO.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Edit this image to show a men positioned in a close-up portrait shot, face tilted slightly upward at approximately 15-20 degrees with her chin gently lifted, creating a confident, aspirational angle. His head is centered in the frame with his gaze directed straight toward the camera from behind the sunglasses. He has short, raven-black hair, he's wearing nice vintage-inspiredround eye sunglasses with molten black-to-grey gradient lenses and matte black frames with delicate etched details, positioned perfectly on the bridge of his nose. His body is angled slightly (about 30 degrees) to create dimension, with shoulders relaxed and one shoulder subtly closer to the camera. he exudes magnetic confidence with a sultry pout. he's wearing a luxurious black blazer. The background is a rich, saturated golden-yellow that transitions to deeper amber tones at the edges. Dramatic directional lighting from above-left creates sculptural shadows along his neck and cheekbones, with warm backlighting creating a subtle halo effect. The composition is a Style/fashion portrait style with the face taking up roughly 60% of the frame. use the subject in the image provided just exactly as he is",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-3941c86e-c1df-4eb1-bdb5-a7640b3fae68",
    "name": "BUK.Shall",
    "description": "Using the uploaded image, keep the exact real face, hairstyle, and skin tone unchanged. Fashion photography of a stylish male model sitting casually on a soft textured beanbag chair, working on a MacBook Pro 2025. He is ...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/BUK.SHALL.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Using the uploaded image, keep the exact real face, hairstyle, and skin tone unchanged. Fashion photography of a stylish male model sitting casually on a soft textured beanbag chair, working on a MacBook Pro 2025. He is wearing oversized off-white wide-leg trousers, a textured oversized grey sweater, and clean chunky white sneakers. He holds a takeaway coffee cup in one hand and the laptop rests naturally on his lap. Background: smooth neutral wall with soft natural sunlight casting diagonal shadows. Lighting: bright, minimalist, editorial, muted neutral tones with a modern marketing aesthetic. Camera angle: straight-on eye-level shot with slight upward perspective. Lens: 50mm prime, close-up editorial framing. Clean minimalist composition, high-resolution detail.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-d9a340dc-683b-457f-b8b9-3769e222dfaf",
    "name": "Man in Black",
    "description": "Usando a foto de referencia, use meu rosto e Crie um retrato em preto e branco de alta qualidade com iluminação dramática e contraste forte. O fundo deve ser completamente preto, destacando apenas o rosto e parte do tron...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/MAN_IN_BLACK.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Usando a foto de referencia, use meu rosto e Crie um retrato em preto e branco de alta qualidade com iluminação dramática e contraste forte. O fundo deve ser completamente preto, destacando apenas o rosto e parte do tronco da pessoa. A pessoa tem cabelo curto , veste uma camisa com gola e está com uma expressão séria e intensa. A luz deve vir de um ângulo lateral ou superior, criando sombras marcantes que realçam os traços faciais. O estilo deve lembrar fotografia de estúdio com foco artístico e emocional, transmitindo profundidade e introspecção.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-1298c271-124a-4257-a69b-0ced2fb9633f",
    "name": "Sunlit corridor",
    "description": "Use 100% face above uploaded photo A full-body, hyper-realistic portrait of a handsome 27-year-old Egyptian man with black hair and a black beard like uploaded photo, and sunglasses. He is leaning confidently against a d...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/SUNLIT_CORRIDOR.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Use 100% face above uploaded photo A full-body, hyper-realistic portrait of a handsome 27-year-old Egyptian man with black hair and a black beard like uploaded photo, and sunglasses. He is leaning confidently against a dark, modern architectural wall in a sunlit corridor. He wears a meticulously detailed brown leather biker jacket with quilted shoulders, a black crew neck t-shirt, black skinny cargo pants with",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-1680b99f-e079-400e-a262-25d397ee8893",
    "name": "Hadi",
    "description": "I will use the uploaded face without any alterations. Please create a full-body, realistic image of a well-dressed man standing on a balcony overlooking a historic street in a European city. The outfit includes a short-s...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/HADI.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "I will use the uploaded face without any alterations. Please create a full-body, realistic image of a well-dressed man standing on a balcony overlooking a historic street in a European city. The outfit includes a short-sleeved maroon polo shirt, light cream-colored high-waisted pleated trousers, light brown leather loafers, sunglasses, and a wristwatch. He should be standing with his arms crossed, leaning against the stone railing of the balcony. The background should feature classic European architecture with domed buildings, ornate facades, and a bustling street below. The lighting should be natural daylight, with realistic textures and a cinematic fashion photography style. The overall feel of the image should be chic, serene, and timeless.",
    "aspectRatio": "16:9",
    "isOfficial": false
  },
  {
    "id": "banana-65cb6a36-0333-49d2-9a8a-e7cdab3fabaa",
    "name": "The flight",
    "description": "Ultra-realistic cinematic portrait of a young man, keeping the same facial features as reference. He is wearing black sunglasses, a black jacket, slim black track pants with red stripes, and white sneakers. The man is si...",
    "image": "https://pub-37a08b330da1467d853b8f9635b847b4.r2.dev/prompts2/THE_FLIGHT.webp",
    "style": "Midjourney v6.1",
    "gender": "Male",
    "tags": [
      "BananaPrompts",
      "Photorealistic",
      "Male"
    ],
    "prompt": "Ultra-realistic cinematic portrait of a young man, keeping the same facial features as reference. He is wearing black sunglasses, a black jacket, slim black track pants with red stripes, and white sneakers. The man is sitting casually on a weathered concrete edge, one leg bent and the other hanging, with his arms resting on his knee. His head is turned slightly to the right, showing a confident and calm expression. Above him, a massive airplane flies extremely low under an overcast cloudy sky. Shot in wide-angle and low-angle perspective, creating a dramatic and surreal atmosphere. 8k, ultra-detailed, cinematic lighting.",
    "aspectRatio": "16:9",
    "isOfficial": false
  }
];
