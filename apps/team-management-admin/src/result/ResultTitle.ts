import { Result as TResult } from "../api/result/Result";

export const RESULT_TITLE_FIELD = "event";

export const ResultTitle = (record: TResult): string => {
  return record.event?.toString() || String(record.id);
};
