import type { IArticle } from "./Article";
import ArticleFormType from "./ArticleFormType";

interface IArticleForm {
  id?: string;
  title: string;
  type?: ArticleFormType;
  contentList?: Array<string>;
  content?: string;
  tags: Array<string>;
}

function toArticle(artForm: IArticleForm): IArticle {
  return {
    id: artForm.id || undefined,
    title: artForm.title,
    content:
      artForm.type === ArticleFormType.List
        ? artForm.contentList
        : artForm.content,
    tags: artForm.tags,
    author: "",
    lang: "",
  } as IArticle;
}

export type { IArticleForm };
export { toArticle };
