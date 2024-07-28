"use client";

import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "next/navigation";
import PropertyComponent from "@/components/property/property-components";

const queryClient = new QueryClient();

export default function PropertyDetailsPage() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PropertyComponent id={useParams().id} />
      </QueryClientProvider>
    </>
  );
}
