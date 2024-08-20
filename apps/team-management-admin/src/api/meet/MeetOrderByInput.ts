import { SortOrder } from "../../util/SortOrder";

export type MeetOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  seasonId?: SortOrder;
  series?: SortOrder;
  updatedAt?: SortOrder;
};
