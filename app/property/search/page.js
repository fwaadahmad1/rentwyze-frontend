import React from "react";
import PropertyCard from "@/components/property/property-card";
import CardScroll from "@/components/common/card-scroll";

export default function PropertySearchPage() {
  return (
    <div>
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
      <PropertyCard
        name="Seaside Serenity Villa"
        description="description"
        price="1,250,000"
        image="/images/sample_property.png"
      />
    </div>
  );
}
