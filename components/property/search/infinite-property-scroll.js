import React, { useState, useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import PropertyCard from "../property-card";

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
    setItems(dummyItems);
  }, [dummyItems]);

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
      setItems([...items, ...dummyItems]);

      setIndex((prevIndex) => prevIndex + 1);
    }, 300000);
  };

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
