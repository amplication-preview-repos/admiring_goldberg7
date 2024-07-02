import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ControllerConfigService } from "./controllerconfig.service";
import { ControllerSettingsUpdateInput } from "../controllerConfig/ControllerSettingsUpdateInput";
import { ControllerSettingsUpdateResponse } from "../controllerConfig/ControllerSettingsUpdateResponse";

@swagger.ApiTags("controllerConfigs")
@common.Controller("controllerConfigs")
export class ControllerConfigController {
  constructor(protected readonly service: ControllerConfigService) {}

  @common.Post("/controller-settings")
  @swagger.ApiOkResponse({
    type: ControllerSettingsUpdateResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateControllerSettings(
    @common.Body()
    body: ControllerSettingsUpdateInput
  ): Promise<ControllerSettingsUpdateResponse> {
        return this.service.UpdateControllerSettings(body);
      }
}
