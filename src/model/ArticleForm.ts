import type { IArticle } from "./Article";
import ArticleFormType from "./ArticleFormType";

interface IArticleForm {
  id?: string;
  title: string;
  type: ArticleFormType;
  bodyList?: Array<string>;
  body?: string;
  tags: Array<string>;
}

function articleFormToIArticle(artForm: IArticleForm): IArticle {
  return {
    id: artForm.id,
    title: artForm.title,
    body: artForm.body || artForm.bodyList,
    tags: artForm.tags,
    author: "",
    lang: "",
  } as IArticle;
}

function articleFormToIArticleForm(art: IArticle): IArticleForm {
  return {
    id: art.id,
    title: art.title,
    type:
      art.body instanceof String ? ArticleFormType.Text : ArticleFormType.List,
    bodyList: art.body as Array<string>,
    body: art.body,
    tags: art.tags,
  } as IArticleForm;
}

export type { IArticleForm };
export { articleFormToIArticle, articleFormToIArticleForm };
