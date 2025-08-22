import React from "react";
import { NotFoundPage } from "@/components/NotFoundPage";
import { staticMetadata, generate404Metadata } from "@/lib/metadata-configs";
import "./globals.css";

export const metadata = staticMetadata;
export const generateMetadata = generate404Metadata;
export default function NotFound() {
  return <NotFoundPage />;
}
