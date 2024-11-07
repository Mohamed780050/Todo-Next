import { TodoModule } from "@/components/TodoModule";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

function TodosAddingButton() {
  return (
    <TodoModule method="POST">
      <Button>
        <PlusCircle size={20}/>
        add Todo
      </Button>
    </TodoModule>
  );
}
export default TodosAddingButton;
