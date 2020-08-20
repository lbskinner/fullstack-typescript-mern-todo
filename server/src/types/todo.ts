import { Document } from "mongoose";
// documents represent a one-to-one mapping to documents as stored in MongoDB
// each document is an instance of its Model
// the Model class is a subclass of the Document class

export interface ITodo extends Document {
  name: string;
  description: string;
  status: boolean;
}
