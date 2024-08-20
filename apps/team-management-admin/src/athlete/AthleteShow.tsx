import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ATHLETE_TITLE_FIELD } from "./AthleteTitle";
import { MEET_TITLE_FIELD } from "../meet/MeetTitle";

export const AthleteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Result"
          target="athleteId"
          label="Results"
        >
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
