import { MeetUpdateManyWithoutSeasonsInput } from "./MeetUpdateManyWithoutSeasonsInput";

export type SeasonUpdateInput = {
  endDate?: Date | null;
  meets?: MeetUpdateManyWithoutSeasonsInput;
  name?: string | null;
  startDate?: Date | null;
};
