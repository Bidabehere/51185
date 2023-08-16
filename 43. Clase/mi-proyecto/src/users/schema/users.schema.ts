import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema()
export class User {

    @Prop({required:true})
    first_name: string;

    @Prop({required:true})
    last_name: string;

    @Prop({required:true, unique: true})
    email: string;
}

export type UserDocument = HydratedDocument<User>;

export const userSchema = SchemaFactory.createForClass(User)
