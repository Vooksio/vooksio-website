import { ContactPage } from "@/components/contact/ContactPage";
import { generateContactMetadata, generateContactViewport } from "@/lib/metadata-configs";
import React from "react";

export const generateMetadata = generateContactMetadata;
export const generateViewport = generateContactViewport;

function page() {
  return <ContactPage />;
}

export default page;
