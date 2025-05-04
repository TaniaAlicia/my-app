import { UserType } from "./user.types";
/*
export type MessageType = {
 user:UserType;
message: string;
  
}; */

export interface MessageType {
    id: string;
    user: UserType;
    message: string; // <-- asegúrate de que sea string
    repliesCount: number;
  }