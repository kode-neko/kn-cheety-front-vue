import type Tag from "./Tag";

interface Article {
  id?: string;
  title: string;
  body: string;
  tagList: Array<Tag>;
}

export default Article;
