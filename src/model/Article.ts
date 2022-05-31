import type Tag from "./Tag";
import type { IArticleForm } from "./ArticleForm";
import ArticleFormType from "./ArticleFormType";

interface IArticle {
  id?: string;
  title: string;
  body: string | Array<string>;
  tagList: Array<Tag>;
}
class Article {
  private _id?: string;
  private _title: string;
  private _body: string | Array<string>;
  private _tagList: Array<Tag>;

  constructor(ia?: IArticle, af?: IArticleForm) {
    if (ia) {
      this._id = ia.id;
      this._title = ia.title ?? "";
      this._body = ia.body ?? "";
      this._tagList = ia.tagList ?? [];
    } else if (af) {
      this._id = af.id;
      this._title = af.title ?? "";
      this._body =
        af.type === ArticleFormType.List
          ? (af.bodyList as Array<string>)
          : (af.body as string);
      this._tagList = af.tagList ?? [];
    } else {
      this._title = "";
      this._body = [];
      this._tagList = [];
    }
  }

  toIArticleForm(): IArticleForm {
    return {
      id: this._id && undefined,
      title: this._title,
      type:
        this._body instanceof String
          ? ArticleFormType.Text
          : ArticleFormType.List,
      bodyList: this._body as Array<string>,
      body: this._body as string,
      tagList: this._tagList,
    } as IArticleForm;
  }

  toIArticle(): IArticle {
    return {
      id: this._id && undefined,
      title: this._title,
      body: this._body as string,
      tagList: this._tagList,
    } as IArticle;
  }

  set id(val: string) {
    this._id = val;
  }
  get id() {
    return this._id as string;
  }

  set title(val: string) {
    this._id = val;
  }
  get title() {
    return this._title;
  }

  set body(val: string | Array<string>) {
    this._body = val;
  }
  get body() {
    return this._body;
  }

  set tagList(val: Array<Tag>) {
    this._tagList = val;
  }
  get tagList() {
    return this._tagList;
  }
}

export type { IArticle };
export { Article };
