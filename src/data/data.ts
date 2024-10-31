import { TodoModuleInputsInerface } from "@/interfaces/interface";

const TodoModuleInputs: TodoModuleInputsInerface[] = [
  { id: "title", name: "Title", type: "text",placeholder:"Write Your Todo's Title" },
  { id: "body", name: "Body", type: "text" ,placeholder:"Write Your Todo's Body"},
  { id: "completed", name: "Completed", type: "checkbox"},
];
// eslint-disable-next-line import/no-anonymous-default-export
export default { TodoModuleInputs };
