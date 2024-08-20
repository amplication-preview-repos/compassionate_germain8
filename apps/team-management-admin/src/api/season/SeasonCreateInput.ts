import { MeetCreateNestedManyWithoutSeasonsInput } from "./MeetCreateNestedManyWithoutSeasonsInput";

export type SeasonCreateInput = {
  endDate?: Date | null;
  meets?: MeetCreateNestedManyWithoutSeasonsInput;
  name?: string | null;
  startDate?: Date | null;
};
