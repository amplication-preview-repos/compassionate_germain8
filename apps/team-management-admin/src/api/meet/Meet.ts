import { Result } from "../result/Result";
import { Season } from "../season/Season";

export type Meet = {
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  name: string | null;
  results?: Array<Result>;
  season?: Season | null;
  series: string | null;
  updatedAt: Date;
};
