import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";


const userSchema = new mongoose.Schema<IUser>({
    name: {type: String, required:true},
    email: {type:String , required:true},
    password:{type:String, required:true},
    role: {type:String, enum:["super_admin", "admin", "guest", "customer", "libraian"], default:"customer"},
    profileImage: {type:String, required:true },
    isDeleted: {type:Boolean, default:false},
},{
    timestamps:true,
    versionKey: false

});

export const User = mongoose.model<IUser>("User", userSchema);