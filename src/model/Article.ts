import type Tag from "./Tag";
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

class Article {
  private _id?: string;
  private _title: string;
  private _body: string | Array<string>;
  private _tags: Array<string>;
  private _author: string;
  private _lang: string;

  constructor(ia?: IArticle, af?: IArticleForm) {
    if (ia) {
      this._id = ia.id;
      this._title = ia.title ?? "";
      this._body = ia.body ?? "";
      this._tags = ia.tags ?? [];
      this._author = ia.author ?? "";
      this._lang = ia.lang ?? "";
    } else if (af) {
      this._id = af.id;
      this._title = af.title ?? "";
      this._body =
        af.type === ArticleFormType.List
          ? (af.bodyList as Array<string>)
          : (af.body as string);
      this._tags = af.tags ?? [];
      this._author = "";
      this._lang = "";
    } else {
      this._title = "";
      this._body = [];
      this._tags = [];
      this._author = "";
      this._lang = "";
    }
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get body(): string | Array<string> {
    return this._body;
  }

  public set body(value: string | Array<string>) {
    this._body = value;
  }

  public get tags(): Array<string> {
    return this._tags;
  }

  public set tags(value: Array<string>) {
    this._tags = value;
  }

  public get author(): string {
    return this._author;
  }

  public set author(value: string) {
    this._author = value;
  }

  public get lang(): string {
    return this._lang;
  }

  public set lang(value: string) {
    this._lang = value;
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
      tags: this._tags,
    } as IArticleForm;
  }

  toIArticle(): IArticle {
    return {
      id: this._id && undefined,
      title: this._title,
      body: this._body as string | Array<string>,
      tags: this._tags,
      author: this._author,
      lang: this._lang,
    } as IArticle;
  }
}

export type { IArticle };
export { Article };
