import { Meet } from "../meet/Meet";

export type Season = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  meets?: Array<Meet>;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
