export interface IShopBook {
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
  coverImage: string;
  status: "available" | "unavailable";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
