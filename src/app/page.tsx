"use client";
import { TodoModule } from "@/components/TodoModule";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <TodoModule>
        <Button>add Note</Button>
      </TodoModule>
    </div>
  );
}
