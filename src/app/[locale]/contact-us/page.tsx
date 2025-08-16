import { ContactPage } from "@/components/contact/ContactPage";
import { generateContactMetadata } from "@/lib/metadata-configs";
import React from "react";

export const generateMetadata = generateContactMetadata;

function page() {
  return <ContactPage />;
}

export default page;
