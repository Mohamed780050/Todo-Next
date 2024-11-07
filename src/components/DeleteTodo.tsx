import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { changeRefetch } from "@/Redux/global";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";

async function deleteTheTodo(userId: string | undefined, TodoId: string) {
  try {
    const response = axios.delete(
      `http://localhost:3000/api/todos/${userId}?TodoId=${TodoId}`
    );
    console.log(response)
  } catch (err) {
    console.log(err);
  }
}

export function DeleteTodo({
  children,
  userId,
  TodoId,
}: {
  children: ReactNode;
  userId: string | undefined;
  TodoId: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isSubmitting}
            onClick={async () => {
              setIsSubmitting(true);
              await deleteTheTodo(userId, TodoId);
              dispatch(changeRefetch())
            }}
          >
            <Trash2 />
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
