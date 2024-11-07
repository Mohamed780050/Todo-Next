import { TodoInterface } from "@/interfaces/interface";
import { DeleteTodo } from "./DeleteTodo";
import { TodoModule } from "./TodoModule";
import { Button } from "./ui/button";

function TodoActions({
  userId,
  TodoId,
  TodoInfo,
}: {
  userId: string | undefined;
  TodoId: string;
  TodoInfo: TodoInterface;
}) {
  return (
    <div className="flex items-center space-x-2">
      <TodoModule method="PUT" TodoInfo={TodoInfo} TodoId={TodoId}>
        <Button>Edit</Button>
      </TodoModule>
      <DeleteTodo userId={userId} TodoId={TodoId}>
        <Button variant="destructive">Delete</Button>
      </DeleteTodo>
    </div>
  );
}
export default TodoActions;
