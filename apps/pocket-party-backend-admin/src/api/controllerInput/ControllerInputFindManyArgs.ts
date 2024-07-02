import { ControllerInputWhereInput } from "./ControllerInputWhereInput";
import { ControllerInputOrderByInput } from "./ControllerInputOrderByInput";

export type ControllerInputFindManyArgs = {
  where?: ControllerInputWhereInput;
  orderBy?: Array<ControllerInputOrderByInput>;
  skip?: number;
  take?: number;
};
