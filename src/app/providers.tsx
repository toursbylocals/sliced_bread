"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
interface ProviderProps {
  children: ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default Providers;
