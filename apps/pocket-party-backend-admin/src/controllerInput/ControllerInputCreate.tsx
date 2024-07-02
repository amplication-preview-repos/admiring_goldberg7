import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserAccountTitle } from "../userAccount/UserAccountTitle";

export const ControllerInputCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
