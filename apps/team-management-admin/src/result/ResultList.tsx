import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATHLETE_TITLE_FIELD } from "../athlete/AthleteTitle";
import { MEET_TITLE_FIELD } from "../meet/MeetTitle";

export const ResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Results"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Athlete" source="athlete.id" reference="Athlete">
          <TextField source={ATHLETE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="event" source="event" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Meet" source="meet.id" reference="Meet">
          <TextField source={MEET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="place" source="place" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
