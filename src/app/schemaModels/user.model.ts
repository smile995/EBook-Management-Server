import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt";

interface IUserMethods {
  comparePassword(enteredPassword: string): Promise<boolean>;
}

// Model type with methods
type UserModel = mongoose.Model<IUser, {}, IUserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["super_admin", "admin", "guest", "customer", "libraian"], default: "customer" },
    profileImage: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password instance method
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model<IUser, UserModel>("User", userSchema);
