import { NavBar } from './ui/navbar'
import { Footer } from './ui/footer'

const navbarItems = [
    {
      label: "Home",
      value: "home",
      link: "#"
    },
    {
      label: "About",
      value: "about",
      link: "#"
    },
    {
      label: "Properties",
      value: "properties",
      link: "#"
    },
    {
      label: "Services",
      value: "services",
      link: "/register"
    }
  ];
 
export default function Layout({ selected, children }) {
  return (
    <>
      <NavBar items={navbarItems} selected={selected? selected: "home"} />
      <main>{children}</main>
      <Footer />
    </>
  )
}