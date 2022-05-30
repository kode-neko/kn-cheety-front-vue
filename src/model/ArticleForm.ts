/*
interface IArticleForm {
  id?: string;
  title: string;
  bodyList?: Array<string> | string;
  body?: string;
  tagList: Array<Tag>;
}

export default ArticleForm;
*/

import type Tag from "./Tag";
import type Article from "./Article";
import ArticleFormType from "./ArticleFormType";

interface IArticleForm {
  id?: string;
  title: string;
  type: ArticleFormType;
  bodyList?: Array<string>;
  body?: string;
  tagList: Array<Tag>;
}

class ArticleForm {
  private _id?: string;
  private _title: string;
  private _type: ArticleFormType;
  private _bodyList?: Array<string>;
  private _body?: string;
  private _tagList: Array<Tag>;

  constructor(iaf?: IArticleForm, a?: Article) {
    if (iaf) {
      this._id = iaf.id;
      this._title = iaf.title ?? "";
      this._type = iaf.type ?? ArticleFormType.List;
      this._bodyList = iaf.bodyList ?? [];
      this._body = iaf.body ?? "";
      this._tagList = iaf.tagList ?? [];
    } else if (a) {
      this._id = a.id;
      this._title = a.title ?? "";
      this._type =
        a.body instanceof String ? ArticleFormType.Text : ArticleFormType.List;
      if (a.body instanceof String) this._body = a.body as string;
      else this._bodyList = a.body as Array<string>;
      this._tagList = a.tagList ?? [];
    } else {
      this._title = "";
      this._type = ArticleFormType.List;
      this._tagList = [];
    }
  }

  toArticle(): Article {
    return {
      id: this._id,
      title: this._title,
      body: this.body || this._bodyList,
      tagList: this._tagList,
    } as Article;
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

  set tagList(val: Array<Tag>) {
    this._tagList = val;
  }
  get tagList() {
    return this._tagList;
  }
}

export default ArticleForm;
