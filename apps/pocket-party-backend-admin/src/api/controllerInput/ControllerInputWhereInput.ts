import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserAccountWhereUniqueInput } from "../userAccount/UserAccountWhereUniqueInput";

export type ControllerInputWhereInput = {
  id?: StringFilter;
  inputType?: StringNullableFilter;
  inputValue?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userAccount?: UserAccountWhereUniqueInput;
};
