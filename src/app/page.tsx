"use client";
import Todos from "@/components/Todos";
import { toast } from "@/hooks/use-toast";
import { store } from "@/Redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WifiOff } from "lucide-react";
import { Provider } from "react-redux";

if (window !== undefined) {
  window.addEventListener("offline", () => {
    toast({
      title: "You are Offline",
      variant: "destructive",
      children: <WifiOff />,
    });
  });

  window.addEventListener("online", () => {
    toast({
      title: "You are Online",
      className: "bg-emerald-600",
    });
  });
}
export default function Home() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <div>
          <Todos />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}
