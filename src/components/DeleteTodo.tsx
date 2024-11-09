import {
  AlertDialog,
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
import { Button } from "./ui/button";

async function deleteTheTodo(userId: string | null, TodoId: string) {
  try {
    await axios.delete(
      `http://localhost:3000/api/todos/${userId}?TodoId=${TodoId}`
    );
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
  userId: string | null;
  TodoId: string;
}) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
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
          <Button
            variant="destructive"
            disabled={isSubmitting}
            onClick={async () => {
              setIsSubmitting(true);
              await deleteTheTodo(userId, TodoId);
              dispatch(changeRefetch());
              setOpen(false);
            }}
          >
            <Trash2 />
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
