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
import { NewsArticleWhereInput } from "./NewsArticleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NewsArticleOrderByInput } from "./NewsArticleOrderByInput";

@ArgsType()
class NewsArticleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NewsArticleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NewsArticleWhereInput, { nullable: true })
  @Type(() => NewsArticleWhereInput)
  where?: NewsArticleWhereInput;

  @ApiProperty({
    required: false,
    type: [NewsArticleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NewsArticleOrderByInput], { nullable: true })
  @Type(() => NewsArticleOrderByInput)
  orderBy?: Array<NewsArticleOrderByInput>;

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

export { NewsArticleFindManyArgs as NewsArticleFindManyArgs };