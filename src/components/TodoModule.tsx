import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TodoModuleInterface } from "@/interfaces/interface";
import { Save } from "lucide-react";
import data from "@/data/data";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoModuleValidation } from "@/validation/validate";
import { z } from "zod";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { changeRefetch } from "@/Redux/global";

export function TodoModule({
  Title = "Add a new Todo",
  children,
}: TodoModuleInterface) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ Title: string; Body: string; Completed: boolean }>({
    resolver: zodResolver(TodoModuleValidation),
  });
  async function submit(values: z.infer<typeof TodoModuleValidation>) {
    try {
      console.log(values);
      const response = await axios.post(
        `http://localhost:3000/api/todos/${user?.id}`,
        values
      );
      dispatch(changeRefetch())
      console.log(response);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <span onClick={() => setOpen(true)}>{children}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{Title}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(submit)}>
          {data.TodoModuleInputs.map((item, index) => (
            <div
              key={index}
              className={`${
                item.name === "Completed" &&
                "flex items-center flex-row-reverse justify-end"
              }`}
            >
              <Label
                htmlFor={item.id}
                className={`text-right ${
                  item.name === "Completed" && "text-lg"
                }`}
              >
                {item.name}
              </Label>
              {item.name === "Body" ? (
                <Textarea
                  id={item.id}
                  className="mt-2"
                  placeholder={item.placeholder}
                  {...register(`${item.id}`)}
                />
              ) : (
                <Input
                  id={item.id}
                  type={item.type}
                  className={`mt-2 ${
                    item.name === "Completed" && "w-5 mt-0 mr-2"
                  }`}
                  placeholder={item.placeholder}
                  {...register(`${item.id}`)}
                />
              )}
              {errors[`${item.id}`]?.message && (
                <p className="mt-1 text-red-800 text-sm">
                  {errors[`${item.id}`]?.message}
                </p>
              )}
            </div>
          ))}
          <DialogFooter>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              <Save />
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
