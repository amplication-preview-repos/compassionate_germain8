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
import { NewsArticleCreateInput } from "./NewsArticleCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateNewsArticleArgs {
  @ApiProperty({
    required: true,
    type: () => NewsArticleCreateInput,
  })
  @ValidateNested()
  @Type(() => NewsArticleCreateInput)
  @Field(() => NewsArticleCreateInput, { nullable: false })
  data!: NewsArticleCreateInput;
}

export { CreateNewsArticleArgs as CreateNewsArticleArgs };