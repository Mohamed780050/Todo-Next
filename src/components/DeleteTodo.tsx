"use client";
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
import { Trash2 } from "lucide-react";
import { ReactNode, useState } from "react";

async function deleteTheTodo(userId: string | undefined, TodoId: string) {
  try {
    console.log(userId, TodoId);
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
