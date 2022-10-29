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

function articleFormToIArticle(artForm: IArticleForm): IArticle {
  return {
    id: artForm.id,
    title: artForm.title,
    content: artForm.content || artForm.contentList,
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
      typeof art.content === "string"
        ? ArticleFormType.Text
        : ArticleFormType.List,
    contentList: typeof art.content === "string" ? undefined : art.content,
    content: typeof art.content === "string" ? art.content : undefined,
    tags: art.tags,
  } as IArticleForm;
}

export type { IArticleForm };
export { articleFormToIArticle, articleFormToIArticleForm };
