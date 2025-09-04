import { Schema, model } from "mongoose";
import { IEBook } from "../interfaces/eBooks.interface";


const EBookSchema = new Schema<IEBook>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorBio: { type: String, default: null },
    authorName: { type: String, required: true },
    category: { type: String, required: true },
    genre: { type: [String], required: true },
    isLocked: { type: Boolean, required: true, default: false },
    price: { type: Number, required: true },
    coverImage: { type: String, required: true },
    status: { type: String, enum: ["available", "unavailable"], default: "available" },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true, // will auto manage createdAt & updatedAt
  }
);

// Create Model
export const EBookModel = model<IEBook>("EBook", EBookSchema);
