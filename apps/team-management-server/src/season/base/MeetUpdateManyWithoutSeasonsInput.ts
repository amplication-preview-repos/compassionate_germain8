/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MeetWhereUniqueInput } from "../../meet/base/MeetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MeetUpdateManyWithoutSeasonsInput {
  @Field(() => [MeetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeetWhereUniqueInput],
  })
  connect?: Array<MeetWhereUniqueInput>;

  @Field(() => [MeetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeetWhereUniqueInput],
  })
  disconnect?: Array<MeetWhereUniqueInput>;

  @Field(() => [MeetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeetWhereUniqueInput],
  })
  set?: Array<MeetWhereUniqueInput>;
}

export { MeetUpdateManyWithoutSeasonsInput as MeetUpdateManyWithoutSeasonsInput };
