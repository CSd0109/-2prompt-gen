import blogsRaw from "./blogsData.json";
import faqsRaw from "./faqsData.json";

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  partner: string;
  readTime: string;
  views: string;
  summary: string;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const ALL_BLOGS = blogsRaw as BlogItem[];
export const ALL_FAQS = faqsRaw as FaqItem[];
