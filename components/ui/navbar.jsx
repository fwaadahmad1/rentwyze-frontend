"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar = React.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => {
    const { items } = props;

    const [selected, setSelected] = React.useState(props.selected);

    const router = useRouter();

    const handleLoginClick = () => {
      router.push("/login");
    };

    return (
      <nav className="navbar">
        {/* <div className="navbar-brand">RentWyze</div> */}
        <Image
          src="/images/RentWyze.png"
          alt="Image"
          width="50"
          height="50"
        />
        <ul className="navbar-menu">
          {items.map((item) => (
            <li
              onClick={() => setSelected(item.value)}
              key={item.value}
              className={item.value === selected ? "navbar-selected" : ""}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button onClick={handleLoginClick} className="contact-us">
          Login
        </button>
      </nav>
    );
  },
);

export { NavBar };
