/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserAccount } from "./UserAccount";
import { UserAccountCountArgs } from "./UserAccountCountArgs";
import { UserAccountFindManyArgs } from "./UserAccountFindManyArgs";
import { UserAccountFindUniqueArgs } from "./UserAccountFindUniqueArgs";
import { CreateUserAccountArgs } from "./CreateUserAccountArgs";
import { UpdateUserAccountArgs } from "./UpdateUserAccountArgs";
import { DeleteUserAccountArgs } from "./DeleteUserAccountArgs";
import { ControllerInputFindManyArgs } from "../../controllerInput/base/ControllerInputFindManyArgs";
import { ControllerInput } from "../../controllerInput/base/ControllerInput";
import { UserAccountService } from "../userAccount.service";
@graphql.Resolver(() => UserAccount)
export class UserAccountResolverBase {
  constructor(protected readonly service: UserAccountService) {}

  async _userAccountsMeta(
    @graphql.Args() args: UserAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserAccount])
  async userAccounts(
    @graphql.Args() args: UserAccountFindManyArgs
  ): Promise<UserAccount[]> {
    return this.service.userAccounts(args);
  }

  @graphql.Query(() => UserAccount, { nullable: true })
  async userAccount(
    @graphql.Args() args: UserAccountFindUniqueArgs
  ): Promise<UserAccount | null> {
    const result = await this.service.userAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserAccount)
  async createUserAccount(
    @graphql.Args() args: CreateUserAccountArgs
  ): Promise<UserAccount> {
    return await this.service.createUserAccount({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UserAccount)
  async updateUserAccount(
    @graphql.Args() args: UpdateUserAccountArgs
  ): Promise<UserAccount | null> {
    try {
      return await this.service.updateUserAccount({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserAccount)
  async deleteUserAccount(
    @graphql.Args() args: DeleteUserAccountArgs
  ): Promise<UserAccount | null> {
    try {
      return await this.service.deleteUserAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ControllerInput], { name: "controllerInputs" })
  async findControllerInputs(
    @graphql.Parent() parent: UserAccount,
    @graphql.Args() args: ControllerInputFindManyArgs
  ): Promise<ControllerInput[]> {
    const results = await this.service.findControllerInputs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}