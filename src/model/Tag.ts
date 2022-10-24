import { v4 as uuidv4 } from "uuid";
interface Tag {
  id: string;
  label: string;
}

function tagListToTagObj(tags: string[]): Tag[] {
  return tags.map((t) => ({ id: uuidv4(), label: t }));
}

export default Tag;
export { tagListToTagObj };
