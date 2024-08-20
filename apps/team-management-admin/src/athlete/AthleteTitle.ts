import { Athlete as TAthlete } from "../api/athlete/Athlete";

export const ATHLETE_TITLE_FIELD = "name";

export const AthleteTitle = (record: TAthlete): string => {
  return record.name?.toString() || String(record.id);
};
