import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserAccountTitle } from "../userAccount/UserAccountTitle";

export const ControllerInputEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="inputType" source="inputType" />
        <TextInput label="inputValue" source="inputValue" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput
          source="userAccount.id"
          reference="UserAccount"
          label="UserAccount"
        >
          <SelectInput optionText={UserAccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
