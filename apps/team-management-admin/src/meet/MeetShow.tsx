import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATHLETE_TITLE_FIELD } from "../athlete/AthleteTitle";
import { MEET_TITLE_FIELD } from "./MeetTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const MeetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <ReferenceField label="season" source="season.id" reference="Season">
          <TextField source={SEASON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="series" source="series" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Result" target="meetId" label="Results">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Athlete"
              source="athlete.id"
              reference="Athlete"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
