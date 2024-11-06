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
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
          </TableRow>
          ))} */}
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
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <Skeleton className="w-full h-6" />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default TableSkeleton;
