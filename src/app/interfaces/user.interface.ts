export interface IUser {
    name :string;
    email:string;
    password:string;
    role: "super_admin" | "admin" | "guest" | "customer" | "libraian";
    profileImage: string;
    isDeleted:boolean;
    createdAt:Date;
    updatedAt:Date;
}