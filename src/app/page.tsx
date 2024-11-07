"use client";
import Todos from "@/components/Todos";
import { store } from "@/Redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

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
