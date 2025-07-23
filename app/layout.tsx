// app/layout.tsx
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/app/components/ui/theme/chakra";
import "@/app/styles/globals.css";

export const metadata = {
  title: "Vooksio",
  description: "Build, Teach, Consult — Turn your product ideas into working code with speed, clarity, and confidence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
