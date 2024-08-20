import { MeetWhereInput } from "./MeetWhereInput";
import { MeetOrderByInput } from "./MeetOrderByInput";

export type MeetFindManyArgs = {
  where?: MeetWhereInput;
  orderBy?: Array<MeetOrderByInput>;
  skip?: number;
  take?: number;
};
