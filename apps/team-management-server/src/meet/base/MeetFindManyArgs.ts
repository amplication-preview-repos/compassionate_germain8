/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeetWhereInput } from "./MeetWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MeetOrderByInput } from "./MeetOrderByInput";

@ArgsType()
class MeetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MeetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MeetWhereInput, { nullable: true })
  @Type(() => MeetWhereInput)
  where?: MeetWhereInput;

  @ApiProperty({
    required: false,
    type: [MeetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MeetOrderByInput], { nullable: true })
  @Type(() => MeetOrderByInput)
  orderBy?: Array<MeetOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MeetFindManyArgs as MeetFindManyArgs };