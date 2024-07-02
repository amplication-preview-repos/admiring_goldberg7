import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ControllerInputServiceBase } from "./base/controllerInput.service.base";

@Injectable()
export class ControllerInputService extends ControllerInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
