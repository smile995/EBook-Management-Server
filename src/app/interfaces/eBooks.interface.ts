export interface IEBook {
  _id: string; 
  title: string;
  description: string;
  authorBio?: string | null;
  authorName: string;
  category: string;
  genre: string[]; 
  isLocked: boolean;
  price: number;
  coverImage: string;
  status: "available" | "unavailable";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
