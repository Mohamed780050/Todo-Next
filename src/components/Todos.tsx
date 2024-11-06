import TodosAddingButton from "./TodosAddingButton";
import { TodosTable } from "./TodosTable";
import { useUser } from "@clerk/nextjs";
function Todos() {
  const { user } = useUser();
  if (!user) return <p>Loading</p>;
  return (
    <div className="container">
      <TodosAddingButton />
      <TodosTable id={user?.id} />
    </div>
  );
}
export default Todos;
