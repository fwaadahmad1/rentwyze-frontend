"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { set, useForm } from "react-hook-form";
import {
  PriceRangeEnum,
  propertySearchFormSchema,
  PropertyTypeEnum,
  ProvincesEnum,
  SizeRangeEnum,
} from "./propertySearch.form.schema";

const PropertySearchForm = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openPriceRange, setOpenPriceRange] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  const form = useForm({
    resolver: zodResolver(propertySearchFormSchema),
    defaultValues: {
      text: "",
      location: "",
      type: "",
      priceMin: "",
      priceMax: "",
      size: "",
    },
  });

  const locationOptions = useMemo(() => {
    return Object.entries(ProvincesEnum).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  }, []);

  const pricingRangeOptions = useMemo(() => {
    return Object.entries(PriceRangeEnum).map(([key, value]) => ({
      label: `$${value.min} - $${value.max}`,
      value: key,
    }));
  }, []);

  const propertyTypeOptions = useMemo(() => {
    return Object.entries(PropertyTypeEnum).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  }, []);

  const propertySizeOptions = useMemo(() => {
    return Object.entries(SizeRangeEnum).map(([key, value]) => ({
      label: `${value.min} - ${value.max} sqft`,
      value: key,
    }));
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {};

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex-col items-center justify-center gap-4"
        >
          {/* Text */}
          <div
            className={
              "mx-auto flex w-3/5 gap-1 rounded-t-lg bg-neutral-100 p-2"
            }
          >
            {/* Text */}
            <FormField
              control={control}
              name="text"
              render={({ field }) => (
                <FormItem className={"w-full"}>
                  <FormControl>
                    <Input placeholder="Search For A Property" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              <Search height={16} />
              Find Property
            </Button>
          </div>

          <div
            className={
              "mx-auto grid w-5/6 grid-cols-4 gap-16 rounded-lg bg-neutral-100 p-2"
            }
          >
            {/* Location */}
            <FormField
              control={control}
              name="location"
              render={({ field }) => {
                const { value, onChange } = field;
                return (
                  <FormItem>
                    <FormControl>
                      <Select
                        options={locationOptions}
                        value={value}
                        onChange={onChange}
                        open={openLocation}
                        setOpen={setOpenLocation}
                        placeholder={"Location"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* Property Type */}
            <FormField
              control={control}
              name="type"
              render={({ field }) => {
                const { value, onChange } = field;
                return (
                  <FormItem>
                    <FormControl>
                      <Select
                        options={propertyTypeOptions}
                        value={value}
                        onChange={onChange}
                        open={openType}
                        setOpen={setOpenType}
                        placeholder={"Property Type"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* Price Range */}
            <FormField
              control={control}
              name="price"
              render={({ field }) => {
                const { value, onChange } = field;
                return (
                  <FormItem>
                    <FormControl>
                      <Select
                        options={pricingRangeOptions}
                        value={value}
                        onChange={onChange}
                        open={openPriceRange}
                        setOpen={setOpenPriceRange}
                        placeholder={"Price Range"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* Size */}
            <FormField
              control={control}
              name="size"
              render={({ field }) => {
                const { value, onChange } = field;
                return (
                  <FormItem>
                    <FormControl>
                      <Select
                        options={propertySizeOptions}
                        value={value}
                        onChange={onChange}
                        open={openSize}
                        setOpen={setOpenSize}
                        placeholder={"Property Size"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </form>
      </Form>
    </div>
  );

  function Select({ options, value, onChange, open, setOpen, placeholder }) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="flex w-full justify-between overflow-hidden text-ellipsis"
          >
            <span className="overflow-hidden text-ellipsis">
              {value
                ? options.find((opt) => opt.value === value)?.label
                : placeholder
                  ? placeholder
                  : "Select..."}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === opt.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {opt.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
};

export default PropertySearchForm;
