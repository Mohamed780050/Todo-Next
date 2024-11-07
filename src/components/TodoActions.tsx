import { DeleteTodo } from "./DeleteTodo";
import { TodoModule } from "./TodoModule";
import { Button } from "./ui/button";

function TodoActions({
  userId,
  TodoId,
}: {
  userId: string | undefined;
  TodoId: string;
}) {
  return (
    <div className="flex items-center space-x-2">
      <TodoModule>
        <Button>Edit</Button>
      </TodoModule>
      <DeleteTodo userId={userId} TodoId={TodoId}>
        <Button variant="destructive">Delete</Button>
      </DeleteTodo>
    </div>
  );
}
export default TodoActions;
