import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetWhereUniqueInput } from "../meet/MeetWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ResultWhereInput = {
  athlete?: AthleteWhereUniqueInput;
  event?: StringNullableFilter;
  id?: StringFilter;
  meet?: MeetWhereUniqueInput;
  place?: IntNullableFilter;
  time?: FloatNullableFilter;
};
