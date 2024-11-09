import { AlignJustify, ChartColumnDecreasing, Clock, Cog } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
function TableSkeleton() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-[250px]">
            <div className=" flex items-center space-x-1">
              <AlignJustify size={15} />
              <p>Title</p>
            </div>
          </TableHead>
          <TableHead>
            <div className="flex items-center space-x-1">
              <ChartColumnDecreasing size={15} />
              <p>Status</p>
            </div>
          </TableHead>
          <TableHead>
            <div className="flex items-center space-x-1">
              <Clock size={15} />
              <p> Created at</p>
            </div>
          </TableHead>
          <TableHead className="max-w-32">
            <div className="flex items-center space-x-1">
              <Cog size={15} />
              <p>Action</p>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }, (_, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="w-full h-6" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full h-6" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full h-6" />
              </TableCell>
              <TableCell className="flex items-center space-x-2 max-w-32">
                <Skeleton className="w-9 h-9 rounded-full" />
                <Skeleton className="w-9 h-9 rounded-full" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>
            <Skeleton className="w-full h-6" />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default TableSkeleton;
