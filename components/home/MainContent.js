import React from "react";
import Image from "next/image";

const StatCards = ({ heading, text }) => (
  <div className="home-stats">
    <p className="home-stats-heading">{heading}</p>
    <p className="home-stats-text">{text}</p>
  </div>
);

const InfoCard = ({ className }) => (
  <div className={`${className} relative mx-auto w-full pb-12 pt-6`}>
    <div className="leading-72 text-left font-sans text-4xl font-semibold">
      Start Your Real Estate Journey Today
    </div>
    <div className="leading-27 leading-27 pt-2 text-left font-sans text-sm font-medium text-muted-foreground">
      Your dream property is just a click away. Whether you're looking for a new
      home, a strategic investment, or expert real estate advice, Estatein is
      here to assist you every step of the way. Take the first step towards your
      real estate goals and explore our available properties or get in touch
      with our team for personalized assistance.
    </div>
  </div>
);

const MainContent = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
    }}
  >
    <div
      style={{
        width: "50%",
      }}
    >
      <div
        className="home-heading"
        style={{
          paddingTop: "100px",
        }}
      >
        Discover Your Dream
      </div>
      <div className="home-heading">Property with RentWyze</div>

      <div className="home-text">
        Your journey to finding the perfect property begins here. Explore our
        listings to find the home that matches your dreams
      </div>

      <div className="home-card-flex">
        <button className="home-learn-more">Learn More</button>
        <button className="browse-properties">Browse Properties</button>
      </div>

      <div className="home-card-flex">
        <StatCards heading="200+" text="Happy Customers" />
        <StatCards heading="10k+" text="Properties for Clients" />
        <StatCards heading="16+" text="Years of Experience" />
      </div>
    </div>
    <div
      style={{
        width: "50%",
      }}
    >
      <Image
        src="/images/bg_building.png"
        alt="Image"
        width="1920"
        height="1080"
        className="h-full w-full overflow-visible object-cover"
      />
    </div>
  </div>
);

export { MainContent, InfoCard };
