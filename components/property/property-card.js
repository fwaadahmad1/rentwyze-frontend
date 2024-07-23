import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function PropertyCard({
  name,
  description,
  price,
  image,
  onclick,
}) {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <Image
          src={image}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full overflow-visible object-cover"
        />
      </CardHeader>
      <CardDescription></CardDescription>
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <div className="grid grid-cols-5 items-center gap-8">
          <div className="col-span-2 flex flex-col gap-2">
            <CardDescription>Price</CardDescription>
            <CardTitle>${price}</CardTitle>
          </div>

          <Button onclick={onclick} className="col-span-3 h-full">
            View Property
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
