import * as graphql from "@nestjs/graphql";
import { ControllerSettingsUpdateInput } from "../controllerConfig/ControllerSettingsUpdateInput";
import { ControllerSettingsUpdateResponse } from "../controllerConfig/ControllerSettingsUpdateResponse";
import { ControllerConfigService } from "./controllerconfig.service";

export class ControllerConfigResolver {
  constructor(protected readonly service: ControllerConfigService) {}

  @graphql.Mutation(() => ControllerSettingsUpdateResponse)
  async UpdateControllerSettings(
    @graphql.Args()
    args: ControllerSettingsUpdateInput
  ): Promise<ControllerSettingsUpdateResponse> {
    return this.service.UpdateControllerSettings(args);
  }
}
