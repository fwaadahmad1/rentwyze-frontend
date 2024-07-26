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
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Amenities, PropertyTypeEnum, ProvincesEnum } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { propertyCreateFormSchema } from "./propertyCreate.form.schema";

const PropertyCreateForm = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openAmenities, setOpenAmenities] = useState(false);

  const form = useForm({
    resolver: zodResolver(propertyCreateFormSchema),
    defaultValues: {
      name: "",
      address: "",
      landlord: "",
      ameneties: [],
    },
  });

  const locationOptions = useMemo(() => {
    return Object.entries(ProvincesEnum).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  }, []);

  const propertyTypeOptions = useMemo(() => {
    return Object.entries(PropertyTypeEnum).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  }, []);

  const propertyAmenitiesOptions = useMemo(() => {
    return Amenities.map((amenity) => ({
      label: amenity,
      value: amenity,
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
          className="grid w-full grid-cols-4 gap-4"
        >
          {/* Name */}
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name of the Property" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Location */}
          <FormField
            control={control}
            name="location"
            render={({ field }) => {
              const { value, onChange } = field;
              return (
                <FormItem>
                  <FormLabel>Province</FormLabel>

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

          {/* Address */}
          <FormField
            control={control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Address</FormLabel>

                <FormControl>
                  <Input placeholder="Address of the Property" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price in CAD (per month) </FormLabel>

                <FormControl>
                  <Input
                    placeholder="Rent per month"
                    {...field}
                    type={"number"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Bedrooms */}
          <FormField
            control={control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Number of Bedrooms"
                    {...field}
                    type={"number"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Bathrooms */}
          <FormField
            control={control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Number of Bathrooms"
                    {...field}
                    type={"number"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Property Type */}
          <FormField
            control={control}
            name="type"
            render={({ field }) => {
              const { value, onChange } = field;
              return (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>

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

          {/* Size */}
          <FormField
            control={control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size (in sqft)</FormLabel>

                <FormControl>
                  <Input placeholder="Size (sqft)" {...field} type={"number"} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Landlord Email */}
          <FormField
            control={control}
            name="landlord"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Landlord Email</FormLabel>
                <FormControl>
                  <Input placeholder="Landlord Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Amenities */}
          <FormField
            control={control}
            name="amenities"
            render={({ field }) => {
              const { value, onChange } = field;
              return (
                <FormItem className="col-span-4">
                  <FormLabel>Amenities</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={propertyAmenitiesOptions}
                      value={value}
                      onChange={onChange}
                      open={openAmenities}
                      setOpen={setOpenAmenities}
                      placeholder={"Amenities"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="col-span-4">
            Create Property
          </Button>
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

  function MultiSelect({
    options,
    value,
    onChange,
    open,
    setOpen,
    placeholder,
  }) {
    const Selected = () => {
      return (
        <div className="flex flex-wrap gap-2">
          {value.map((v) => (
            <>
              <span
                key={v}
                className="flex flex-row items-center gap-2 rounded-full border border-primary px-4 py-1"
              >
                {options.find((opt) => opt.value === v)?.label}
                <X
                  className="h-6 w-6 rounded-full p-1 hover:bg-black/20"
                  onClick={(e) => {
                    e.preventDefault();
                    onChange(value.filter((val) => val !== v));
                  }}
                />
              </span>
            </>
          ))}
        </div>
      );
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="flex h-auto w-full justify-between overflow-hidden text-ellipsis"
          >
            <span className="overflow-hidden text-ellipsis">
              {value && value.length > 0
                ? Selected()
                : placeholder
                  ? placeholder
                  : "Select..."}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandList className="">
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    onSelect={(currentValue) => {
                      const newValue = value?.includes(currentValue)
                        ? value.filter((v) => v !== currentValue)
                        : [...(value ?? []), currentValue];
                      onChange(newValue);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value && value.includes(opt.value)
                          ? "opacity-100"
                          : "opacity-0",
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

export default PropertyCreateForm;
