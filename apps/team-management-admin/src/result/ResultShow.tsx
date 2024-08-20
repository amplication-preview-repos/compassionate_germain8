import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ATHLETE_TITLE_FIELD } from "../athlete/AthleteTitle";
import { MEET_TITLE_FIELD } from "../meet/MeetTitle";

export const ResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
