"use client";

import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardScroll from "@/components/common/card-scroll";
import { FAQCard, FAQTitle } from "@/components/home/FAQCard";
import { InfoCard } from "@/components/home/MainContent";

const propertyImages = [
  {
    url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const propertyDetails = {
  name: "Seaside Serenity Villa",
  location: "Malibu, California",
  price: "1000",
  downPayment: "2000",
  keyDeposit: "200",
  bedrooms: "4",
  bathrooms: "3",
  area: "2500",
};

const features = [
  "Expansive oceanfront terrace for outdoor entertaining",
  "Gourmet kitchen with top-of-the-line appliances",
  "Private beach access for morning strolls and sunset views",
  "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  "Private garage and ample storage space",
];

const faqItems = [
  {
    name: "How do I search for properties on RentWyze?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    name: "What documents do I need to use RentWyze?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    name: "How can I contact a landlord on RentWyze?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    name: "How can I connect with suitable tenants?",
    description: "Find and connect with suitable tenants through our platform.",
  },
  {
    name: "How can I find the best properties?",
    description:
      "Browse through numerous helpful reviews to find the most suitable property for you.",
  },
];

const NameLocationPrice = ({ name, location, price }) => (
  <div className="top-282px h-32 w-[100%] pl-11 pr-11 pt-12">
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div
          style={{ fontSize: "23px" }}
          className="font-urbanist text-30 leading-45 text-left font-semibold"
        >
          {name}
        </div>
        <div className="font-urbanist leading-27 flex h-9 gap-1 rounded-lg border border-gray-300 p-1 text-left text-base font-medium">
          <Image
            src="https://www.svgrepo.com/show/127575/location-sign.svg"
            alt="Image"
            width="15"
            height="15"
          />
          {location}
        </div>
      </div>
      <div style={{ marginTop: "-18px" }} className="flex flex-col">
        <span
          style={{ fontSize: "15px" }}
          className="font-urbanist text-left text-base font-medium leading-6 text-muted-foreground"
        >
          Price
        </span>
        <span className="font-urbanist leading-36 font-semibold">${price}</span>
      </div>
    </div>
  </div>
);

const ImageCarousel = ({ images }) => (
  <div className="carousel-wrap">
    <Carousel>
      {images.map((image) => (
        <div>
          <img src={image.url} />
        </div>
      ))}
    </Carousel>
  </div>
);

const PropertyDescription = () => (
  <>
    <div className="font-urbanist text-left text-xl font-semibold leading-9">
      Description
    </div>
    <div className="font-urbanist border-b border-gray-300 pb-6 text-left text-base font-light leading-7">
      Discover your own piece of paradise with the Seaside Serenity Villa. T
      With an open floor plan, breathtaking ocean views from every room, and
      direct access to a pristine sandy beach, this property is the epitome of
      coastal living.
    </div>
  </>
);

const PropertyDetails = () => (
  <div className="flex gap-[3%] pt-5">
    <div className="w-[30%]">
      <div className="font-urbanist flex gap-1 border-r border-gray-300 text-left text-[18px] font-normal leading-[27px]">
        <img src="/images/bedroom.png" className="h-[24px]" alt="bed" />
        Bedrooms
      </div>
      <div className="font-urbanist border-r border-gray-300 text-left text-2xl font-semibold leading-relaxed">
        {propertyDetails.bedrooms.length === 1 &&
        !isNaN(propertyDetails.bedrooms)
          ? "0" + propertyDetails.bedrooms
          : propertyDetails.bedrooms}
      </div>
    </div>
    <div className="w-[30%]">
      <div className="font-urbanist flex gap-1 border-r border-gray-300 text-left text-[18px] font-normal leading-[27px]">
        <img src="/images/bathtub.png" className="h-[24px]" alt="bath" />
        Bathrooms
      </div>
      <div className="font-urbanist border-r border-gray-300 text-left text-2xl font-semibold leading-relaxed">
        {propertyDetails.bathrooms.length === 1 &&
        !isNaN(propertyDetails.bathrooms)
          ? "0" + propertyDetails.bathrooms
          : propertyDetails.bathrooms}
      </div>
    </div>
    <div className="w-[30%]">
      <div className="font-urbanist flex gap-1 text-left text-[18px] font-normal leading-[27px]">
        <img src="/images/area.png" className="mt-0.5 h-[20px]" alt="bath" />
        Area
      </div>
      <div className="font-urbanist text-left text-2xl font-semibold leading-relaxed">
        {(+propertyDetails.area).toLocaleString("en-US")} Sq Ft
      </div>
    </div>
  </div>
);

const PropertyFeatures = () => (
  <>
    <div className="font-urbanist text-left text-xl font-semibold leading-9">
      Key Features and Amenities
    </div>
    <div className="flex flex-col gap-5 pt-6">
      {features.map((feature) => (
        <div className="font-urbanist flex gap-1 rounded-sm border border-l-8 border-gray-300 border-l-black p-2 text-left text-base font-light leading-7">
          <img className="h-[27px]" src="/images/lightning.png" alt="" />
          {feature}
        </div>
      ))}
    </div>
  </>
);

const Pricing = () => (
  <div className="pb-9 pl-10 pr-10">
    <img src="/images/head-icon.png" className="-mb-5 h-14" alt="heading" />
    <div className="font-urbanist text-left text-[30px] font-semibold leading-[72px]">
      Comprehensive Pricing Details
    </div>
    <div className="font-urbanist text-left text-[16px] font-light leading-[27px]">
      At Rentwyze, transparency is key. We want you to have a clear
      understanding of all costs associated with your rental. Below, we break
      down the pricing for {propertyDetails.name} to help you make an informed
      decision
    </div>
    <div className="mt-6 flex gap-5 border border-gray-300 p-3">
      <span className="font-urbanist text-[18px] font-semibold">Note</span>
      <span className="font-urbanist mt-0.5 text-[16px] font-light">
        The figures provided above are estimates and may vary depending on the
        individual circumstances.
      </span>
    </div>
    <div className="mt-5 flex gap-[2%]">
      <div className="w-[15%]">
        <div className="font-urbanist text-[20px] font-semibold">
          Listing Price
        </div>
        <div className="font-urbanist text-left text-[30px] font-semibold">
          ${(+propertyDetails.price).toLocaleString("en-US")}
        </div>
      </div>
      <div className="w-[93%] border border-gray-300 p-6">
        <div className="flex justify-between border-b border-b-gray-300 pb-6">
          <div className="font-urbanist text-left text-[20px] font-semibold">
            Total Initial Costs
          </div>
          <Button className="-mt-2">Learn More</Button>
        </div>

        <div className="font-urbanist pb-1 pt-6 text-[15px] font-normal text-neutral-600">
          Down Payment
        </div>
        <div className="flex gap-5 border-b border-b-gray-300 pb-6">
          <div className="font-urbanist text-[18px] font-semibold">
            ${(+propertyDetails.downPayment).toLocaleString("en-US")}
          </div>
          <div className="font-urbanist border border-gray-300 pb-0.5 pl-2 pr-2 pt-0.5 text-[14px] font-light">
            Money paid upfront to cover potential damages or unpaid rent
          </div>
        </div>
        <div className="font-urbanist pt-6 text-[15px] font-normal text-neutral-600">
          Key Deposit
        </div>
        <div className="flex gap-5">
          <div className="font-urbanist text-[18px] font-semibold">
            ${(+propertyDetails.keyDeposit).toLocaleString("en-US")}
          </div>
          <div className="font-urbanist border border-gray-300 pb-0.5 pl-2 pr-2 pt-0.5 text-[14px] font-light">
            refundable fee for replacing lost or damaged keys
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function PropertyDetailsPage() {
  return (
    <Layout selected="properties">
      <NameLocationPrice
        name={propertyDetails.name}
        location={propertyDetails.location}
        price={(+propertyDetails.price).toLocaleString("en-US")}
      />
      <ImageCarousel images={propertyImages} />
      <div className="descriptionFeatures flex w-[100%] gap-[2%] border-t border-gray-300 pb-9 pl-11 pr-11 pt-9">
        <div className="h-[325px] w-[45%] border border-gray-300 p-8">
          <PropertyDescription />
          <PropertyDetails />
        </div>
        <div className="w-[55%] border border-gray-300 p-8">
          <PropertyFeatures />
        </div>
      </div>
      <Pricing />
      <FAQTitle />
      <CardScroll
        data={faqItems}
        render={(item, index) => (
          <FAQCard
            key={index}
            name={item.name}
            description={item.description}
          />
        )}
      />
      <div className="mb-5 mt-5">
        <InfoCard className="max-w-[96%]" />
      </div>
    </Layout>
  );
}
