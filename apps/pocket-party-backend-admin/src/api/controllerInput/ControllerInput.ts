import { UserAccount } from "../userAccount/UserAccount";

export type ControllerInput = {
  createdAt: Date;
  id: string;
  inputType: string | null;
  inputValue: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userAccount?: UserAccount | null;
};
