import { ResultCreateNestedManyWithoutMeetsInput } from "./ResultCreateNestedManyWithoutMeetsInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";

export type MeetCreateInput = {
  date?: Date | null;
  location?: string | null;
  name?: string | null;
  results?: ResultCreateNestedManyWithoutMeetsInput;
  season?: SeasonWhereUniqueInput | null;
  series?: string | null;
};
