import { InputJsonValue } from "../../types";

export type NewsCreateInput = {
  content?: string | null;
  image?: InputJsonValue;
  publishedDate?: Date | null;
  title?: string | null;
};
