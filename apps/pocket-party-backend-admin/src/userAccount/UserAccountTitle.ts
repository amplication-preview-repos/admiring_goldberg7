import { UserAccount as TUserAccount } from "../api/userAccount/UserAccount";

export const USERACCOUNT_TITLE_FIELD = "username";

export const UserAccountTitle = (record: TUserAccount): string => {
  return record.username?.toString() || String(record.id);
};
