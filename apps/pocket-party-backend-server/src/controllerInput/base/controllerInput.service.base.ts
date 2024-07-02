/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ControllerInput as PrismaControllerInput,
  UserAccount as PrismaUserAccount,
} from "@prisma/client";

export class ControllerInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ControllerInputCountArgs, "select">
  ): Promise<number> {
    return this.prisma.controllerInput.count(args);
  }

  async controllerInputs(
    args: Prisma.ControllerInputFindManyArgs
  ): Promise<PrismaControllerInput[]> {
    return this.prisma.controllerInput.findMany(args);
  }
  async controllerInput(
    args: Prisma.ControllerInputFindUniqueArgs
  ): Promise<PrismaControllerInput | null> {
    return this.prisma.controllerInput.findUnique(args);
  }
  async createControllerInput(
    args: Prisma.ControllerInputCreateArgs
  ): Promise<PrismaControllerInput> {
    return this.prisma.controllerInput.create(args);
  }
  async updateControllerInput(
    args: Prisma.ControllerInputUpdateArgs
  ): Promise<PrismaControllerInput> {
    return this.prisma.controllerInput.update(args);
  }
  async deleteControllerInput(
    args: Prisma.ControllerInputDeleteArgs
  ): Promise<PrismaControllerInput> {
    return this.prisma.controllerInput.delete(args);
  }

  async getUserAccount(parentId: string): Promise<PrismaUserAccount | null> {
    return this.prisma.controllerInput
      .findUnique({
        where: { id: parentId },
      })
      .userAccount();
  }
}