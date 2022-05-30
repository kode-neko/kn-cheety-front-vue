import type Tag from "./Tag";
import type ArticleForm from "./ArticleForm";
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

  constructor(af?: IArticle) {
    this._id = af?.id;
    this._title = af?.title ?? "";
    this._body = af?.body ?? "";
    this._tagList = af?.tagList ?? [];
  }

  toArticleForm(): ArticleForm {
    return {
      id: this._id && undefined,
      title: this._title,
      type:
        this._body instanceof String
          ? ArticleFormType.Text
          : ArticleFormType.List,
      body: this._body as string,
      tagList: this._tagList,
    } as ArticleForm;
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

export default Article;
