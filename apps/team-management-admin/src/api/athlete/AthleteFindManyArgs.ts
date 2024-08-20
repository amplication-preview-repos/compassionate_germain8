import { AthleteWhereInput } from "./AthleteWhereInput";
import { AthleteOrderByInput } from "./AthleteOrderByInput";

export type AthleteFindManyArgs = {
  where?: AthleteWhereInput;
  orderBy?: Array<AthleteOrderByInput>;
  skip?: number;
  take?: number;
};
