import * as graphql from "@nestjs/graphql";
import { ControllerInputResolverBase } from "./base/controllerInput.resolver.base";
import { ControllerInput } from "./base/ControllerInput";
import { ControllerInputService } from "./controllerInput.service";

@graphql.Resolver(() => ControllerInput)
export class ControllerInputResolver extends ControllerInputResolverBase {
  constructor(protected readonly service: ControllerInputService) {
    super(service);
  }
}
