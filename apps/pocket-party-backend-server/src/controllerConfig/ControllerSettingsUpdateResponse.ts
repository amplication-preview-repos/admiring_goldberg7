import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ControllerSettingsUpdateResponseObject")
class ControllerSettingsUpdateResponse {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    message?: string;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    updatedFields?: string;
}

export { ControllerSettingsUpdateResponse as ControllerSettingsUpdateResponse };