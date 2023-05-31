import { UserInterface } from '../interfaces/UserInterface';
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema<UserInterface>({
    name:{type:String, required:true },
    password:{type:String, required:true },
});

export const UsersModel = mongoose.model("users", UserSchema);
