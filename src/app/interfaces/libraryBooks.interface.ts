export interface ILibraryBook {
  _id: string; // PK, ObjectId
  isbn: string;
  title: string;
  description: string;
  authorName: string;
  authorBio?: string | null;
  category: string;
  genre: string[];
  price: number;
  stock: number;
  availableCopies: number;
  coverImage?: string;
  library: string; // ref ObjectId (Library collection)
  status: "available" | "unavailable";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
