import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERACCOUNT_TITLE_FIELD } from "../userAccount/UserAccountTitle";

export const ControllerInputShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
