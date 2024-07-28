import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import React from "react";

function FAQTitle({ className }) {
  return (
    <div className={`${className} relative mx-auto w-full pb-7 pt-5`}>
      <img src="/images/head-icon.png" className="ml-7 h-14" alt="heading" />
      <div
        style={{ paddingLeft: "32px" }}
        className="leading-72 text-left font-sans text-4xl font-semibold"
      >
        Frequently Asked Questions
      </div>
      <div className="leading-27 pl-8 text-left font-sans text-sm font-medium text-muted-foreground">
        Find answers to common questions about Estatein's services, property
        listings, and the real estate process. We're here to provide clarity and
        assist you every step of the way.
      </div>
    </div>
  );
}

function FAQCard({ name, description, onclick }) {
  return (
    <Card className="max-w-md">
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 pt-5">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="grid grid-cols-5 items-center gap-8">
          <Button onclick={onclick} className="col-span-3 h-full">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { FAQCard, FAQTitle };
