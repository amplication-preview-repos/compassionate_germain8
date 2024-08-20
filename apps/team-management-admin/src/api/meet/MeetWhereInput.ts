import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";

export type MeetWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  results?: ResultListRelationFilter;
  season?: SeasonWhereUniqueInput;
  series?: StringNullableFilter;
};
