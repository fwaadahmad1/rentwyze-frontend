import Image from "next/image";

import RegisterForm from "@/components/register/form/register.form";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <RegisterForm />
      </div>
      <div className="hidden bg-muted lg:block">
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
}
