import { Module } from "@nestjs/common";
import { ControllerConfigService } from "./controllerconfig.service";
import { ControllerConfigController } from "./controllerconfig.controller";
import { ControllerConfigResolver } from "./controllerconfig.resolver";

@Module({
  controllers: [ControllerConfigController],
  providers: [ControllerConfigService, ControllerConfigResolver],
  exports: [ControllerConfigService],
})
export class ControllerConfigModule {}
