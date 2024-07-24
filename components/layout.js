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
 
export default function Layout({ children }) {
  return (
    <>
      <NavBar items={navbarItems} selected="home" />
      <main>{children}</main>
      <Footer />
    </>
  )
}