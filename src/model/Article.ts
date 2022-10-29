import type { IArticleForm } from "./ArticleForm";
import ArticleFormType from "./ArticleFormType";

interface IArticle {
  id?: string;
  title: string;
  body: string | Array<string>;
  tags: Array<string>;
  author: string;
  lang: string;
}

function articleToIArticleForm(art: IArticle): IArticleForm {
  return {
    id: art.id && undefined,
    title: art.title,
    type:
      art.body instanceof String ? ArticleFormType.Text : ArticleFormType.List,
    bodyList: art.body as Array<string>,
    body: art.body as string,
    tags: art.tags,
  } as IArticleForm;
}

function articleToIArticle(artForm: IArticleForm): IArticle {
  return {
    id: artForm.id && undefined,
    title: artForm.title,
    body: artForm.body as string | Array<string>,
    tags: artForm.tags,
    author: "",
    lang: "",
  } as IArticle;
}

export type { IArticle };
export { articleToIArticleForm, articleToIArticle };
