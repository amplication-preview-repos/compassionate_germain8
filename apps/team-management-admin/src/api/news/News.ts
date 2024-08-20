import { JsonValue } from "type-fest";

export type News = {
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
