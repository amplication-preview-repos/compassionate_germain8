import { Result } from "../result/Result";

export type Athlete = {
  age: number | null;
  createdAt: Date;
  gender?: "Option1" | null;
  id: string;
  name: string | null;
  results?: Array<Result>;
  updatedAt: Date;
};
