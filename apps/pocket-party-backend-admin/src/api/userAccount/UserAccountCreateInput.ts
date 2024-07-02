import { ControllerInputCreateNestedManyWithoutUserAccountsInput } from "./ControllerInputCreateNestedManyWithoutUserAccountsInput";

export type UserAccountCreateInput = {
  controllerInputs?: ControllerInputCreateNestedManyWithoutUserAccountsInput;
  hat?: string | null;
  height?: number | null;
  pants?: string | null;
  shirt?: string | null;
  username?: string | null;
};
