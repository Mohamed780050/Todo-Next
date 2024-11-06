import { TodoModule } from "@/components/TodoModule";
import { Button } from "@/components/ui/button";

function TodosAddingButton() {
  return (
    <TodoModule>
      <Button>add Note</Button>
    </TodoModule>
  );
}
export default TodosAddingButton;
