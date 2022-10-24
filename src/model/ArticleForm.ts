import type Tag from "./Tag";
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

class ArticleForm {
  private _id?: string;
  private _title: string;
  private _type: ArticleFormType;
  private _bodyList?: Array<string>;
  private _body?: string;
  private _tags: Array<string>;

  constructor(iaf?: IArticleForm, a?: IArticle) {
    if (iaf) {
      this._id = iaf.id;
      this._title = iaf.title ?? "";
      this._type = iaf.type ?? ArticleFormType.List;
      this._bodyList = iaf.bodyList ?? [];
      this._body = iaf.body ?? "";
      this._tags = iaf.tags ?? [];
    } else if (a) {
      this._id = a.id;
      this._title = a.title ?? "";
      this._type =
        a.body instanceof String ? ArticleFormType.Text : ArticleFormType.List;
      if (a.body instanceof String) this._body = a.body as string;
      else this._bodyList = a.body as Array<string>;
      this._tags = a.tags ?? [];
    } else {
      this._title = "";
      this._type = ArticleFormType.List;
      this._tags = [];
    }
  }

  toIArticle(): IArticle {
    return {
      id: this._id,
      title: this._title,
      body: this.body || this._bodyList,
      tags: this._tags,
      author: "",
      lang: "",
    } as IArticle;
  }

  toIArticleForm(): IArticleForm {
    return {
      id: this._id,
      title: this._title,
      type: this._type,
      bodyList: this._bodyList,
      body: this._body,
      tags: this._tags,
    } as IArticleForm;
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

  set type(val: ArticleFormType) {
    this._type = val;
  }
  get type() {
    return this._type;
  }

  set bodyList(val: Array<string>) {
    this._bodyList = val;
  }
  get bodyList() {
    return this._bodyList as Array<string>;
  }

  set body(val: string) {
    this._body = val;
  }
  get body() {
    return this._body as string;
  }

  set tags(val: Array<string>) {
    this._tags = val;
  }
  get tags() {
    return this._tags;
  }
}

export type { IArticleForm };
export { ArticleForm };
