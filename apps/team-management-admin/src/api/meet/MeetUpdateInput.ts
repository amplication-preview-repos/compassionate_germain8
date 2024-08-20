import { ResultUpdateManyWithoutMeetsInput } from "./ResultUpdateManyWithoutMeetsInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";

export type MeetUpdateInput = {
  date?: Date | null;
  location?: string | null;
  name?: string | null;
  results?: ResultUpdateManyWithoutMeetsInput;
  season?: SeasonWhereUniqueInput | null;
  series?: string | null;
};
