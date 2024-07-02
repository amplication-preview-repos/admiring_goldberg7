import { UserAccountWhereUniqueInput } from "../userAccount/UserAccountWhereUniqueInput";

export type ControllerInputUpdateInput = {
  inputType?: string | null;
  inputValue?: string | null;
  timestamp?: Date | null;
  userAccount?: UserAccountWhereUniqueInput | null;
};
