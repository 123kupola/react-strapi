import sdk from "./sdk";
import type { Block } from "~/components/blocks/BlockRenderer";
import type { IArticleDetail } from "~/components/custom/ArticleDetail";

interface StrapiLoaderResponse<T> {
  data?: T;
  error?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, string[]>;
  };
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface ILandingPage {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
}

export async function getLandingPage(locale = 'sl') {
  const response = await sdk.single("landing-page").find({ locale });
  return response as StrapiLoaderResponse<ILandingPage>;
}

export async function getArticles(locale = 'sl') {
  const response = await sdk.collection("articles").find({ locale });
  return response as StrapiLoaderResponse<IArticleDetail[]>;
}

export async function getArticleBySlug(slug: string, locale = 'sl') {
  const response = await sdk.collection("articles").find({
    locale,
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  return response as StrapiLoaderResponse<IArticleDetail[]>;
}
