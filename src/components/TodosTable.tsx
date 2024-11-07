"use client";
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
import { TodoInterface } from "@/interfaces/interface";
import TableSkeleton from "./TableSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/config/getTodosFunc";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import TodoActions from "./TodoActions";
import { Badge } from "@/components/ui/badge";
import {
  AlignJustify,
  BadgeCheck,
  ChartColumnDecreasing,
  Clock,
  Cog,
} from "lucide-react";

export function TodosTable({ userId }: { userId: string | undefined }) {
  const { refetch } = useSelector((state: RootState) => state.global);
  const { isLoading, data } = useQuery({
    queryKey: [`${refetch}`],
    queryFn: async () => await getTodos(userId),
  });
  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
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
              <TableHead className="min-w-28">
                <div className="flex items-center space-x-1">
                  <Clock size={15} />
                  <p> Created at</p>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Cog size={15} />
                  <p>Action</p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length
              ? data.map((item: TodoInterface, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{item.Title}</TableCell>
                    <TableCell>
                      {item.Completed ? (
                        <Badge className="bg-emerald-600 dark:bg-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-300 space-x-1">
                          <BadgeCheck
                            size={15}
                            className="text-emerald-100 dark:text-black"
                          />
                          <p>Completed</p>
                        </Badge>
                      ) : (
                        <Badge>Uncompleted</Badge>
                      )}
                    </TableCell>
                    <TableCell>{item.createdAt}</TableCell>
                    <TableCell>
                      <TodoActions
                        TodoInfo={item}
                        userId={userId}
                        TodoId={item._id}
                      />
                    </TableCell>
                  </TableRow>
                ))
              : "No Todos"}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{data.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  );
}
