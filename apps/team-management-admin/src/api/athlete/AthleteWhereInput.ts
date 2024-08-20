import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";

export type AthleteWhereInput = {
  age?: IntNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  results?: ResultListRelationFilter;
};
