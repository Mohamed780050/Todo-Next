import { ReactNode } from "react";

export interface TodoModuleInterface {
  Title?: string;
  children: ReactNode;
}
export interface TodoModuleInputsInerface {
  id: "Title" | "Body" | "Completed";
  name: string;
  type: "text" | "checkbox";
  placeholder?: string;
}
export interface TodoInterface {
  Title: string;
  Body: string;
  Completed: boolean;
}
