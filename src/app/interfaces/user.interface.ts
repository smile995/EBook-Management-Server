export interface IUser {
    name :string;
    email:string;
    password:string;
    role: "super_admin" | "admin" | "guest" | "customer" | "libraian";
    profileImage: string;
    isDeleted?:boolean;
    createdAt:Date;
    updatedAt:Date;
}
export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  profileImage?: string;
  isDeleted?: boolean;
}


export interface IUserLogin {

    email:string;
    password:string
}