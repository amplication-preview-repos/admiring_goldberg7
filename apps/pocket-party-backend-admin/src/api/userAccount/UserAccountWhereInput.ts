import { ControllerInputListRelationFilter } from "../controllerInput/ControllerInputListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserAccountWhereInput = {
  controllerInputs?: ControllerInputListRelationFilter;
  hat?: StringNullableFilter;
  height?: FloatNullableFilter;
  id?: StringFilter;
  pants?: StringNullableFilter;
  shirt?: StringNullableFilter;
  username?: StringNullableFilter;
};
