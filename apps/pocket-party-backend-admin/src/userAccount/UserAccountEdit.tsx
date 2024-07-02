import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ControllerInputTitle } from "../controllerInput/ControllerInputTitle";

export const UserAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
