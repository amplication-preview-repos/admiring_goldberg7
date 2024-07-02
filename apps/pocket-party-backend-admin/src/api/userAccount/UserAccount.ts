import { ControllerInput } from "../controllerInput/ControllerInput";

export type UserAccount = {
  controllerInputs?: Array<ControllerInput>;
  createdAt: Date;
  hat: string | null;
  height: number | null;
  id: string;
  pants: string | null;
  shirt: string | null;
  updatedAt: Date;
  username: string | null;
};
