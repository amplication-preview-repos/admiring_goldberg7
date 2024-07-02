import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ControllerInputTitle } from "../controllerInput/ControllerInputTitle";

export const UserAccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="controllerInputs"
          reference="ControllerInput"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ControllerInputTitle} />
        </ReferenceArrayInput>
        <TextInput label="hat" source="hat" />
        <NumberInput label="height" source="height" />
        <TextInput label="pants" source="pants" />
        <TextInput label="shirt" source="shirt" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
