import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { MeetWhereUniqueInput } from "../meet/MeetWhereUniqueInput";

export type ResultUpdateInput = {
  athlete?: AthleteWhereUniqueInput | null;
  event?: string | null;
  meet?: MeetWhereUniqueInput | null;
  place?: number | null;
  time?: number | null;
};
