import type { IArticleForm } from "./ArticleForm";
import ArticleFormType from "./ArticleFormType";

interface IArticle {
  id?: string;
  title: string;
  content: string | Array<string>;
  tags: Array<string>;
  author: string;
  lang: string;
}

function articleToIArticleForm(art: IArticle): IArticleForm {
  return {
    id: art.id && undefined,
    title: art.title,
    type:
      typeof art.content === "string"
        ? ArticleFormType.Text
        : ArticleFormType.List,
    contentList: typeof art.content === "string" ? undefined : art.content,
    content: typeof art.content === "string" ? art.content : undefined,
    tags: art.tags,
  } as IArticleForm;
}

function articleToIArticle(artForm: IArticleForm): IArticle {
  return {
    id: artForm.id && undefined,
    title: artForm.title,
    content: artForm.content as string | Array<string>,
    tags: artForm.tags,
    author: "",
    lang: "",
  } as IArticle;
}

export type { IArticle };
export { articleToIArticleForm, articleToIArticle };
