import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResultTitle } from "../result/ResultTitle";
import { SeasonTitle } from "../season/SeasonTitle";

export const MeetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="results"
          reference="Result"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResultTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="season.id" reference="Season" label="season">
          <SelectInput optionText={SeasonTitle} />
        </ReferenceInput>
        <TextInput label="series" source="series" />
      </SimpleForm>
    </Edit>
  );
};
