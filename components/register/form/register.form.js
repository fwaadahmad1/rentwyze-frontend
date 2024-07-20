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
import { Server } from "@/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  GenderEnum,
  registerFormSchema,
  RoleEnum,
} from "./register.form.schema";

async function registerUser(data) {
  const response = await Server.post("/user/signup", data);
  return response.data;
}

const RegisterForm = () => {
  const [openRole, setOpenRole] = useState(false);
  const [openGender, setOpenGender] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      password: "",
      role: "RENTER",
    },
  });

  const roleOptions = useMemo(() => {
    return Object.entries(RoleEnum).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  }, []);

  const genderOptions = useMemo(() => {
    return Object.entries(GenderEnum).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    await registerUser(data);
  };

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-balance text-muted-foreground">
          Enter your information to create an account
        </p>
      </div>
      <div className="grid">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Full Name */}
            <div className={"grid grid-cols-2 gap-4"}>
              {/* First Name */}
              <FormField
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Last Namee */}
              <FormField
                control={control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Contact Number */}
            <FormField
              control={control}
              name="contactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className={"grid grid-cols-2 gap-4"}>
              {/* Role */}
              <FormField
                control={control}
                name="role"
                render={({ field }) => {
                  const { value, onChange } = field;

                  return (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Popover open={openRole} onOpenChange={setOpenRole}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openRole}
                              className="w-full justify-between"
                            >
                              {value
                                ? roleOptions.find(
                                    (role) => role.value === value,
                                  )?.label
                                : "Select role..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandList>
                                <CommandGroup>
                                  {roleOptions.map((role) => (
                                    <CommandItem
                                      key={role.value}
                                      value={role.value}
                                      onSelect={(currentValue) => {
                                        onChange(
                                          currentValue === value
                                            ? ""
                                            : currentValue,
                                        );
                                        setOpenRole(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          value === role.value
                                            ? "opacity-100"
                                            : "opacity-0",
                                        )}
                                      />
                                      {role.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              {/* Gender */}
              <FormField
                control={control}
                name="gender"
                render={({ field }) => {
                  const { value, onChange } = field;

                  return (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Popover open={openGender} onOpenChange={setOpenGender}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openGender}
                              className="w-full justify-between"
                            >
                              {value
                                ? genderOptions.find(
                                    (gender) => gender.value === value,
                                  )?.label
                                : "Select gender..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandList>
                                <CommandGroup>
                                  {genderOptions.map((gender) => (
                                    <CommandItem
                                      key={gender.value}
                                      value={gender.value}
                                      onSelect={(currentValue) => {
                                        onChange(
                                          currentValue === value
                                            ? ""
                                            : currentValue,
                                        );
                                        setOpenGender(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          value === gender.value
                                            ? "opacity-100"
                                            : "opacity-0",
                                        )}
                                      />
                                      {gender.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
