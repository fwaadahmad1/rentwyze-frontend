"use client";

import PropertyComponent from "@/components/property/property-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function PropertyDetailsPage({ id }) {
  return (
    <>
      <PropertyComponent id={id} />
    </>
  );
}
