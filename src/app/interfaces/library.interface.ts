export interface ILibrary {
  _id: string; // ObjectId
  name: string;
  user: string; // ref ObjectId (User collection)
  contactNo: string;
  address: string;
  geo_lat: string;
  geo_lng: string;
  librarian: string[]; // array of ObjectIds or names
  isActive: boolean;
  borrows: string[]; // array (can be ref ObjectId for Borrow collection)
  createdAt: Date;
  updatedAt: Date;
}
