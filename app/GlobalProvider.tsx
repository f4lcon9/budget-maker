"use client";
import Header from "@/components/layout/Header";
import { store } from "@/redux/store";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Toaster/>
          <Header />
          {children}
        </Theme>
      </Provider>
    </>
  );
}
