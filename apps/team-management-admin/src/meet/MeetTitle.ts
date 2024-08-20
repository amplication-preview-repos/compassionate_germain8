import { Meet as TMeet } from "../api/meet/Meet";

export const MEET_TITLE_FIELD = "name";

export const MeetTitle = (record: TMeet): string => {
  return record.name?.toString() || String(record.id);
};
