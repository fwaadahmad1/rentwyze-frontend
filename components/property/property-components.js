import React from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout";
import Image from "next/image";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Button } from "@/components/ui/button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardScroll from "@/components/common/card-scroll";
import { FAQCard, FAQTitle } from "@/components/home/FAQCard";
import { InfoCard } from "@/components/home/MainContent";
import { useRouter } from "next/navigation";

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

const comments = [
  {
    username: "Test User One",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo quam architecto earum ex aspernatur. Optio aut cum, hic, magni dicta qui esse facere eaque nobis minus veniam! Perferendis magnam libero velit voluptatum natus doloremque labore temporibus neque mollitia odit.",
  },
  {
    username: "Test User One",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam delectus sint eveniet, porro sapiente unde consectetur error totam fugiat voluptas!",
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
          {location?.street}, {location?.city}, {location?.province},{" "}
          {location?.postalCode}
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

const PropertyDetails = ({ bedrooms, bathrooms, area }) => {
  return (
    <div className="flex gap-[3%] pt-5">
      <div className="w-[30%]">
        <div className="font-urbanist flex gap-1 border-r border-gray-300 text-left text-[18px] font-normal leading-[27px]">
          <img src="/images/bedroom.png" className="h-[24px]" alt="bed" />
          Bedrooms
        </div>
        <div className="font-urbanist border-r border-gray-300 text-left text-2xl font-semibold leading-relaxed">
          {!isNaN(bedrooms) && bedrooms < 10 ? "0" + bedrooms : bedrooms}
        </div>
      </div>
      <div className="w-[30%]">
        <div className="font-urbanist flex gap-1 border-r border-gray-300 text-left text-[18px] font-normal leading-[27px]">
          <img src="/images/bathtub.png" className="h-[24px]" alt="bath" />
          Bathrooms
        </div>
        <div className="font-urbanist border-r border-gray-300 text-left text-2xl font-semibold leading-relaxed">
          {!isNaN(bathrooms) && bathrooms < 10 ? "0" + bathrooms : bathrooms}
        </div>
      </div>
      <div className="w-[30%]">
        <div className="font-urbanist flex gap-1 text-left text-[18px] font-normal leading-[27px]">
          <img src="/images/area.png" className="mt-0.5 h-[20px]" alt="bath" />
          Area
        </div>
        <div className="font-urbanist text-left text-2xl font-semibold leading-relaxed">
          {area ? (+area).toLocaleString("en-US") : ""} Sq Ft
        </div>
      </div>
    </div>
  );
};

const PropertyFeatures = ({ amenities }) => (
  <>
    <div className="font-urbanist text-left text-xl font-semibold leading-9">
      Key Features and Amenities
    </div>
    <div className="flex flex-col gap-5 pt-6">
      {amenities?.map((feature) => (
        <div className="font-urbanist flex gap-1 rounded-sm border border-l-8 border-gray-300 border-l-black p-2 text-left text-base font-light leading-7">
          <img className="h-[27px]" src="/images/lightning.png" alt="" />
          {feature}
        </div>
      ))}
    </div>
  </>
);

const Pricing = ({ propertyDetails }) => (
  <div className="pb-9 pl-10 pr-10">
    <img src="/images/head-icon.png" className="-mb-5 h-14" alt="heading" />
    <div className="font-urbanist text-left text-[30px] font-semibold leading-[72px]">
      Comprehensive Pricing Details
    </div>
    <div className="font-urbanist text-left text-[16px] font-light leading-[27px]">
      At Rentwyze, transparency is key. We want you to have a clear
      understanding of all costs associated with your rental. Below, we break
      down the pricing for {propertyDetails?.name} to help you make an informed
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
          ${(+propertyDetails?.price).toLocaleString("en-US")}
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
            {!isNaN(propertyDetails?.downPayment)
              ? "$" + (+propertyDetails?.downPayment).toLocaleString("en-US")
              : propertyDetails?.downPayment}
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
            {!isNaN(propertyDetails?.keyDeposit)
              ? "$" + (+propertyDetails?.keyDeposit).toLocaleString("en-US")
              : propertyDetails?.keyDeposit}
          </div>
          <div className="font-urbanist border border-gray-300 pb-0.5 pl-2 pr-2 pt-0.5 text-[14px] font-light">
            refundable fee for replacing lost or damaged keys
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AddComment = ({ setComments, comments, propertyId }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      //   Replace with your API endpoint
      const response = await fetch(
        "http://localhost:8000/api/review/AddReview",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            property_id: propertyId,
            tenant_id: "66a3f0c50ec2eaa5e3797eec",
            rating: 4,
            review: data.comment,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Optionally, handle the response if needed
      const result = await response.json();
      console.log("Success:", result);

      // Reset form fields
      reset();
      setComments((prevComments) => [
        ...prevComments,
        {
          tenant_id: result?.userReview?.tenant_id,
          review: result?.userReview?.review || data.comment,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mb-3 rounded-lg bg-white shadow-md">
      <div className="p-4">
        <h5 className="text-lg font-semibold">Leave a comment</h5>
        <hr className="my-4" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <textarea
              {...register("comment", { required: "Comment is required" })}
              rows="3"
              className="form-textarea bg-light w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter your comment here..."
              style={{ resize: "none" }}
            ></textarea>
            {/* Display validation errors if needed */}
            {/* {errors.comment && <p className="text-red-500">{errors.comment.message}</p>} */}
          </div>
          <Button type="submit" className="">
            Comment
          </Button>
        </form>
      </div>
    </div>
  );
};

const UserComment = ({ tenant_id, review }) => (
  <div className="mb-3 rounded-lg bg-white shadow-md">
    <div className="p-4">
      <h5 className="text-lg font-semibold">
        {tenant_id?.firstName} {tenant_id?.lastName}
      </h5>
      <p className="mt-2 text-gray-700">{review}</p>
      <hr className="my-4" />
    </div>
  </div>
);

const Comments = ({ userReviews, setComments, comments, propertyId }) => (
  <div className="bg-light m-auto w-[50%]">
    {/* <!-- Comment section --> */}
    <div className="container mx-auto pt-3">
      <div>
        <h3 className="text-2xl font-semibold">Comments</h3>
        <hr className="my-4" />
        {/* <!-- Add comment --> */}
        <AddComment
          setComments={setComments}
          comments={comments}
          propertyId={propertyId}
        />
        {userReviews
          ? userReviews.map((comment) => <UserComment {...comment} />)
          : null}
      </div>
    </div>
  </div>
);

const fetchProperty = async (id) => {
  const res = await fetch(`http://localhost:8000/api/property/${id}`);
  const result = res.json();

  return result;
};

export default function PropertyComponent({ id }) {
  const [comments, setComments] = React.useState([]);

  const { data, status } = useQuery("property", async () => fetchProperty(id), {
    onSuccess: (data) => {
      const { reviews } = data;
      setComments(reviews);
    },
  });

  return (
    <>
      <NameLocationPrice
        name={data?.property?.name}
        location={data?.property?.address}
        price={(+data?.property?.price).toLocaleString("en-US")}
      />
      <ImageCarousel images={propertyImages} />
      <div className="descriptionFeatures flex w-[100%] gap-[2%] border-t border-gray-300 pb-9 pl-11 pr-11 pt-9">
        <div className="h-[325px] w-[45%] border border-gray-300 p-8">
          <PropertyDescription />
          <PropertyDetails
            bedrooms={data?.property?.bedrooms}
            bathrooms={data?.property?.bathrooms}
            area={data?.property?.squareFeet}
          />
        </div>
        <div className="w-[55%] border border-gray-300 p-8">
          <PropertyFeatures amenities={data?.property?.amenities} />
        </div>
      </div>
      <Pricing propertyDetails={data?.property} />
      <Comments
        userReviews={comments}
        setComments={setComments}
        comments={comments}
        propertyId={id}
      />
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
    </>
  );
}
