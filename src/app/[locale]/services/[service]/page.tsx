import { ServicePage } from "@/components/services/ServicePage";
import React from "react";

const page = ({ params }: { params: { service: string; locale: "ar" | "en" } }) => {
  const { service, locale } = params;

  return <ServicePage currentService={service} language={locale} />;
};

export default page;
