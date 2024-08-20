import { ResultCreateNestedManyWithoutAthletesInput } from "./ResultCreateNestedManyWithoutAthletesInput";

export type AthleteCreateInput = {
  age?: number | null;
  gender?: "Option1" | null;
  name?: string | null;
  results?: ResultCreateNestedManyWithoutAthletesInput;
};
