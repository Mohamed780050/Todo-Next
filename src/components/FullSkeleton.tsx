import TableSkeleton from "./TableSkeleton";
import { Skeleton } from "./ui/skeleton";

function FullSkeleton() {
  return (
    <div className="container">
      <Skeleton className="w-[113.3px] h-9 mb-1" />
      <TableSkeleton />
    </div>
  );
}
export default FullSkeleton;
