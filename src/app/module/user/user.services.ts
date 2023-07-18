import { IUser } from "./user.interface";
import UserModel from "./user.model";

export const createUserToDB = async (param: IUser): Promise<IUser> => {
  const newUser = await new UserModel(param);
  await newUser.save();
  return newUser;
};
