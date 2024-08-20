import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AthleteTitle } from "../athlete/AthleteTitle";
import { MeetTitle } from "../meet/MeetTitle";

export const ResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="athlete.id" reference="Athlete" label="Athlete">
          <SelectInput optionText={AthleteTitle} />
        </ReferenceInput>
        <TextInput label="event" source="event" />
        <ReferenceInput source="meet.id" reference="Meet" label="Meet">
          <SelectInput optionText={MeetTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="place" source="place" />
        <NumberInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
