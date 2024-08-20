import { SortOrder } from "../../util/SortOrder";

export type ResultOrderByInput = {
  athleteId?: SortOrder;
  createdAt?: SortOrder;
  event?: SortOrder;
  id?: SortOrder;
  meetId?: SortOrder;
  place?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
