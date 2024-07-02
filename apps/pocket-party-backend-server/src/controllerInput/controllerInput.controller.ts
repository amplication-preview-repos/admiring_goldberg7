import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ControllerInputService } from "./controllerInput.service";
import { ControllerInputControllerBase } from "./base/controllerInput.controller.base";

@swagger.ApiTags("controllerInputs")
@common.Controller("controllerInputs")
export class ControllerInputController extends ControllerInputControllerBase {
  constructor(protected readonly service: ControllerInputService) {
    super(service);
  }
}
