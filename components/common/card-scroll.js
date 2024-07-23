import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselSnapDisplay,
} from "@/components/ui/carousel";

export default function CardScroll({ data, render }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full max-w-7xl"
    >
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">{render && render(item, index)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-2 h-[0.5px] w-full bg-muted-foreground opacity-20" />
      <div className="flex w-full flex-row justify-between p-2">
        <CarouselSnapDisplay />
        <div className="flex flex-row gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
