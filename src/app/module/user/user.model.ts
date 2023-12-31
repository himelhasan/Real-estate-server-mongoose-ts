import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "editor", "user"] },
  email: { type: String, required: true },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
