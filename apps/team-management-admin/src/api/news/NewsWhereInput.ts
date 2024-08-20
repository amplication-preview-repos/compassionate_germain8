import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NewsWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  publishedDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
