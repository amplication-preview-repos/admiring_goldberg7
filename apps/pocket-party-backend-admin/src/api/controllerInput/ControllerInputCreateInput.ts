import { UserAccountWhereUniqueInput } from "../userAccount/UserAccountWhereUniqueInput";

export type ControllerInputCreateInput = {
  inputType?: string | null;
  inputValue?: string | null;
  timestamp?: Date | null;
  userAccount?: UserAccountWhereUniqueInput | null;
};
