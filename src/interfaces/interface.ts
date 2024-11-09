import { ReactNode } from "react";

export interface TodoModuleInterface {
  Title?: string;
  children: ReactNode;
  TodoId?: string;
  method: "POST" | "PUT";
  TodoInfo?: TodoInterface;
}
export interface TodoModuleInputsInerface {
  id: "Title" | "Body" | "Completed";
  name: string;
  type: "text" | "checkbox";
  placeholder?: string;
}
export interface TodoInterface {
  _id: string;
  Title: string;
  Body: string;
  Completed: boolean;
  createdAt: string;
}

export interface UserIdInterface {
  userId: string | null;
}
