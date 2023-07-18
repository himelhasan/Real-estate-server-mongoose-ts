export interface IUser {
  name: string;
  role: "admin" | "editor" | "user";
  email: string;
}

// export interface IAdmin extends IUser {}
