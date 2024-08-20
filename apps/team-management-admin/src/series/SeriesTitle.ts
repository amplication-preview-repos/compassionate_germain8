import { Series as TSeries } from "../api/series/Series";

export const SERIES_TITLE_FIELD = "name";

export const SeriesTitle = (record: TSeries): string => {
  return record.name?.toString() || String(record.id);
};
