"use client";

import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Button } from "@/components/ui/button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardScroll from "@/components/common/card-scroll";
import { FAQCard, FAQTitle } from "@/components/home/FAQCard";
import { InfoCard } from "@/components/home/MainContent";
import { useParams } from "next/navigation";
import PropertyComponent from "@/components/property/property-components";

const queryClient = new QueryClient();

export default function PropertyDetailsPage() {

  return (
    <Layout selected="properties">
      <QueryClientProvider client={queryClient}>
        <PropertyComponent id={useParams().id} />
      </QueryClientProvider>
    </Layout>
  );
}
