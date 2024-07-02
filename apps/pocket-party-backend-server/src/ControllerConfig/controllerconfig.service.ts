import { Injectable } from "@nestjs/common";
import { ControllerSettingsUpdateInput } from "../controllerConfig/ControllerSettingsUpdateInput";
import { ControllerSettingsUpdateResponse } from "../controllerConfig/ControllerSettingsUpdateResponse";

@Injectable()
export class ControllerConfigService {
  constructor() {}
  async UpdateControllerSettings(args: ControllerSettingsUpdateInput): Promise<ControllerSettingsUpdateResponse> {
    throw new Error("Not implemented");
  }
}
