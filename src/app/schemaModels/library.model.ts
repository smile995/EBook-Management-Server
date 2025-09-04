import mongoose, { Schema, model } from "mongoose";
import { ILibrary } from "../interfaces/library.interface";

const LibrarySchema = new Schema<ILibrary>(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
    geo_lat: { type: String, required: true },
    geo_lng: { type: String, required: true },
    librarian: [{ type: Schema.Types.ObjectId, ref: "User" }], // assuming librarians are users
    isActive: { type: Boolean, default: true },
    borrows: [{ type: Schema.Types.ObjectId, ref: "Borrow" }], // referencing Borrow collection
  },
  {
    timestamps: true, 
  }
);

export const LibraryModel = model<ILibrary>("Library", LibrarySchema);
