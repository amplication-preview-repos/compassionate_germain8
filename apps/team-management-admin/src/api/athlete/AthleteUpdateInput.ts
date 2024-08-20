import { ResultUpdateManyWithoutAthletesInput } from "./ResultUpdateManyWithoutAthletesInput";

export type AthleteUpdateInput = {
  age?: number | null;
  gender?: "Option1" | null;
  name?: string | null;
  results?: ResultUpdateManyWithoutAthletesInput;
};
