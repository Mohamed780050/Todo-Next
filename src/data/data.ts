import { TodoModuleInputsInerface } from "@/interfaces/interface";

const TodoModuleInputs: TodoModuleInputsInerface[] = [
  { id: "Title", name: "Title", type: "text",placeholder:"Write Your Todo's Title" },
  { id: "Body", name: "Body", type: "text" ,placeholder:"Write Your Todo's Body"},
  { id: "Completed", name: "Completed", type: "checkbox"},
];
// eslint-disable-next-line import/no-anonymous-default-export
export default { TodoModuleInputs };
