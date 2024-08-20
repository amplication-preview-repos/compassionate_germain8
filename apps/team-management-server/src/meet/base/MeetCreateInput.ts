/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ResultCreateNestedManyWithoutMeetsInput } from "./ResultCreateNestedManyWithoutMeetsInput";
import { SeasonWhereUniqueInput } from "../../season/base/SeasonWhereUniqueInput";

@InputType()
class MeetCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResultCreateNestedManyWithoutMeetsInput,
  })
  @ValidateNested()
  @Type(() => ResultCreateNestedManyWithoutMeetsInput)
  @IsOptional()
  @Field(() => ResultCreateNestedManyWithoutMeetsInput, {
    nullable: true,
  })
  results?: ResultCreateNestedManyWithoutMeetsInput;

  @ApiProperty({
    required: false,
    type: () => SeasonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SeasonWhereUniqueInput)
  @IsOptional()
  @Field(() => SeasonWhereUniqueInput, {
    nullable: true,
  })
  season?: SeasonWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  series?: string | null;
}

export { MeetCreateInput as MeetCreateInput };