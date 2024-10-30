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
          <div className="">
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
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => console.log("clicked")} className="w-full">
            <Save />
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
