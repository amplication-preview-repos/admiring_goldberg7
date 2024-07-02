import { ControllerInput as TControllerInput } from "../api/controllerInput/ControllerInput";

export const CONTROLLERINPUT_TITLE_FIELD = "inputType";

export const ControllerInputTitle = (record: TControllerInput): string => {
  return record.inputType?.toString() || String(record.id);
};
