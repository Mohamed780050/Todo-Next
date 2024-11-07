import FullSkeleton from "./FullSkeleton";
import TodosAddingButton from "./TodosAddingButton";
import { TodosTable } from "./TodosTable";
import { useUser } from "@clerk/nextjs";
function Todos() {
  const { user } = useUser();
  if (!user) return <FullSkeleton/>;
  return (
    <div className="container">
      <TodosAddingButton />
      <TodosTable userId={user?.id} />
    </div>
  );
}
export default Todos;
