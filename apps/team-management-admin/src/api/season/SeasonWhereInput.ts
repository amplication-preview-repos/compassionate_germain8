import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetListRelationFilter } from "../meet/MeetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SeasonWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  meets?: MeetListRelationFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
