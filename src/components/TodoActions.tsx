import { TodoInterface } from "@/interfaces/interface";
import { DeleteTodo } from "./DeleteTodo";
import { TodoModule } from "./TodoModule";
import { Button } from "./ui/button";
import { Pen, Trash2 } from "lucide-react";

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
        <Button className="rounded-full" size="icon">
          <Pen size={25} />
        </Button>
      </TodoModule>
      <DeleteTodo userId={userId} TodoId={TodoId}>
        <Button variant="destructive" className="rounded-full" size="icon">
          <Trash2 size={25} />
        </Button>
      </DeleteTodo>
    </div>
  );
}
export default TodoActions;
