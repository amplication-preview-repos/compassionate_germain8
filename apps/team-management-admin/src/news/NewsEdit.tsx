import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
