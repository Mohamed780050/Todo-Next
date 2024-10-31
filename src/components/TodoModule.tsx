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

export function TodoModule({ Title = "Add a new Todo" }: TodoModuleInterface) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{Title}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
                <Textarea id={item.id} className="mt-2" 
                placeholder={item.placeholder}/>
              ) : (
                <Input
                  id={item.id}
                  type={item.type}
                  className={`mt-2 ${
                    item.name === "Completed" && "w-5 mt-0 mr-2"
                  }`}
                  placeholder={item.placeholder}
                />
              )}
            </div>
          ))}
          {/* <div className="">
            <Label htmlFor="title" className="text-right ">
              Title
            </Label>
            <Input id="title" className="col-span-3 mt-2" />
          </div>
          <div className="">
            <Label htmlFor="description" className="text-right ">
              Description
            </Label>
            <Input id="description" className="col-span-3 mt-2" />
          </div>
          <div className="flex items-center space-x-2">
            <Input type="checkbox" id="description" className="w-4" />
            <Label htmlFor="description" className="text-right text-lg">
              Completed
            </Label>
          </div> */}
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => console.log("clicked")}
            className="w-full"
          >
            <Save />
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
