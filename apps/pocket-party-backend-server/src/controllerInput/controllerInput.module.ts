import { Module } from "@nestjs/common";
import { ControllerInputModuleBase } from "./base/controllerInput.module.base";
import { ControllerInputService } from "./controllerInput.service";
import { ControllerInputController } from "./controllerInput.controller";
import { ControllerInputResolver } from "./controllerInput.resolver";

@Module({
  imports: [ControllerInputModuleBase],
  controllers: [ControllerInputController],
  providers: [ControllerInputService, ControllerInputResolver],
  exports: [ControllerInputService],
})
export class ControllerInputModule {}
