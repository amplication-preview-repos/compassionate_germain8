import { Athlete } from "../athlete/Athlete";
import { Meet } from "../meet/Meet";

export type Result = {
  athlete?: Athlete | null;
  createdAt: Date;
  event: string | null;
  id: string;
  meet?: Meet | null;
  place: number | null;
  time: number | null;
  updatedAt: Date;
};
