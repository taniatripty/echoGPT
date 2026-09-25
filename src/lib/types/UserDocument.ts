import { ObjectId } from "mongodb";

export interface UserDocument {
  _id?: ObjectId | string;

  name: string;
  email: string;
  password?: string;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}