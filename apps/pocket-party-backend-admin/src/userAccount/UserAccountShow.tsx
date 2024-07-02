import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERACCOUNT_TITLE_FIELD } from "./UserAccountTitle";

export const UserAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="hat" source="hat" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="pants" source="pants" />
        <TextField label="shirt" source="shirt" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="ControllerInput"
          target="userAccountId"
          label="ControllerInputs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="inputType" source="inputType" />
            <TextField label="inputValue" source="inputValue" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserAccount"
              source="useraccount.id"
              reference="UserAccount"
            >
              <TextField source={USERACCOUNT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
