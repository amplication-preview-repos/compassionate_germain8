import { InputJsonValue } from "../../types";

export type NewsUpdateInput = {
  content?: string | null;
  image?: InputJsonValue;
  publishedDate?: Date | null;
  title?: string | null;
};
