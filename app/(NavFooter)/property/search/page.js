"use client";
import CardScroll from "@/components/common/card-scroll";
import PropertyCard from "@/components/property/property-card";
import { InfinitePropertyScroll } from "@/components/property/search/infinite-property-scroll";
import PropertySearchForm from "@/components/property/search/propertySearch.form";
import Logo from "@/public/abs_des_1.svg";
import Image from "next/image";

export default function PropertySearchPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-100">
      {/* HEADER */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={Logo}
          alt="logo"
          className="absolute left-0 z-0 w-full opacity-10"
        />
        <div className="mx-auto max-w-7xl px-8 py-32">
          <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
            Find Your Dream Property
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Welcome to RentWyze, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center bg-white">
        <div className="flex w-full max-w-7xl flex-col items-center">
          {/* Filter Section */}
          <div className="z-10 -mt-8 mb-8 w-full">
            <PropertySearchForm />
          </div>
        </div>

        {/* Property List */}

        {/* <div>
          <div className="max-w-7xl px-8 py-16">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
              Discover a World of Possibilities
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>

          <CardScroll
            data={[
              {
                name: "Seaside Serenity Villa",
                description: "description",
                price: "1,250,000",
                image: "/images/sample_property.png",
              },
              {
                name: "Seaside Serenity Villa",
                description: "description",
                price: "1,250,000",
                image: "/images/sample_property.png",
              },
              {
                name: "Seaside Serenity Villa",
                description: "description",
                price: "1,250,000",
                image: "/images/sample_property.png",
              },
              {
                name: "Seaside Serenity Villa",
                description: "description",
                price: "1,250,000",
                image: "/images/sample_property.png",
              },
              {
                name: "Seaside Serenity Villa",
                description: "description",
                price: "1,250,000",
                image: "/images/sample_property.png",
              },
            ]}
            render={(item, index) => (
              <PropertyCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )}
          />
        </div> */}
      </div>

      {/* <div className="w-full bg-white">
        <div className="relative my-8 mb-5 flex w-full justify-center overflow-hidden border-b-2 border-t-2 bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]">
          <Image src={Logo} alt="logo" className="absolute left-0 opacity-10" />
          <div className="max-w-7xl px-8 py-16">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
              Start Your Real Estate Journey Today
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Your dream property is just a click away. Whether you&apos;re
              looking for a new home, a strategic investment, or expert real
              estate advice, Estatein is here to assist you every step of the
              way. Take the first step towards your real estate goals and
              explore our available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
        </div>
      </div> */}

      <div className="h-full min-h-screen w-full bg-white">
        <div className="mx-auto max-w-7xl">
          <InfinitePropertyScroll />
        </div>
      </div>
    </div>
  );
}
