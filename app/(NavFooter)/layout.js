import { NavBar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const navbarItems = [
  {
    label: "Home",
    value: "home",
    link: "/",
  },
  {
    label: "About",
    value: "about",
    link: "/",
  },
  {
    label: "Properties",
    value: "property",
    link: "/property/search",
  },
  {
    label: "Services",
    value: "services",
    link: "/register",
  },
];

export default function NavFooterLayout({ children }) {
  return (
    <section>
      <NavBar items={navbarItems} />
      {children}
      <Footer />
    </section>
  );
}
