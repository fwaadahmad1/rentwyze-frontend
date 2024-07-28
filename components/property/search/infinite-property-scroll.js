import React, { useState, useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import PropertyCard from "../property-card";
import { data } from "autoprefixer";
import NoData from "@/public/noData.svg";
import Image from "next/image";

export function InfinitePropertyScroll() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  const dummyItems = useMemo(
    () => [
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
    ],
    [],
  );

  useEffect(() => {
    // axios
    //   .get("")
    //   .then((res) => setItems(res.data))
    //   .catch((err) => console.log(err));
    //   setItems([]);
    // setHasMore(false);
    setTimeout(() => {
      // setItems([...items, ...dummyItems]);
      // setIndex((prevIndex) => prevIndex + 1);
      setHasMore(false);
    }, 3000);
  }, []);

  const fetchMoreData = () => {
    // axios
    //   .get(``)
    //   .then((res) => {
    //     setItems((prevItems) => [...prevItems, ...res.data]);
    //     res.data.length > 0 ? setHasMore(true) : setHasMore(false);
    //   })
    //   .catch((err) => console.log(err));
    // sleep for 3 seconds
    setTimeout(() => {
      // setItems([...items, ...dummyItems]);
      // setIndex((prevIndex) => prevIndex + 1);
      setHasMore(false);
    }, 3000);
  };

  if (items.length === 0 && hasMore === false) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <Image src={NoData} alt="No data found" className="w-72" />
        <h1 className="scroll-m-20 text-2xl tracking-tight">No data found</h1>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <div className="mt-8 flex w-full items-center justify-center">
          <div class="loader"></div>{" "}
        </div>
      }
    >
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {items &&
            items.map((item, index) => (
              <PropertyCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}
