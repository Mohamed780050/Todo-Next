export interface TodoModuleInterface {
  Title?: string;
}
export interface TodoModuleInputsInerface {
  id: string;
  name: string;
  type: "text" | "checkbox";
  placeholder?: string;
}
