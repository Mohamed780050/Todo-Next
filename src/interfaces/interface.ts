import { ReactNode } from "react";

export interface TodoModuleInterface {
  Title?: string;
  children: ReactNode;
}
export interface TodoModuleInputsInerface {
  id: "title" | "body" | "completed";
  name: string;
  type: "text" | "checkbox";
  placeholder?: string;
}
