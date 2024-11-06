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
import axios from "axios";
import { useEffect, useState } from "react";
import TableSkeleton from "./TableSkeleton";

export function TodosTable({ id }: { id: string | undefined }) {
  const [data, setData] = useState<[] | TodoInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(`http://localhost:3000/api/todos/${id}`);
        setData(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
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
            {data.length
              ? data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.Title}</TableCell>
                    <TableCell>{item.Completed}</TableCell>
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
