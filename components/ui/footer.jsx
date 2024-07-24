"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const footerProps = [
    {
        title: "Home",
        elements: [
            {
                label: "Features",
                link: "#"
            },
            {
                label: "Properties",
                link: "#"
            },
            {
                label: "Testimonials",
                link: "#"
            },
            {
                label: "FAQ's",
                link: "#"
            }
        ]
    },
    {
        title: "About Us",
        elements: [
            {
                label: "Our Story",
                link: "#"
            },
            {
                label: "How It Works",
                link: "#"
            },
            {
                label: "Our Team",
                link: "#"
            },
            {
                label: "Our Clients",
                link: "#"
            }
        ]
    },
    {
        title: "Properties",
        elements: [
            {
                label: "Portfolio",
                link: "#"
            },
            {
                label: "Categories",
                link: "#"
            }
        ]
    },
    {
        title: "Services",
        elements: [
            {
                label: "Valuation Mastery",
                link: "#"
            },
            {
                label: "Strategic Marketing",
                link: "#"
            },
            {
                label: "Negotiation Wizardry",
                link: "#"
            },
            {
                label: "Closing Success",
                link: "#"
            },
            {
                label: "Property Management",
                link: "#"
            }
        ]
    },
    {
        title: "Contact Us",
        elements: [
            {
                label: "Contact Form",
                link: "#"
            },
            {
                label: "Our Offices",
                link: "#"
            }
        ]
    }
]

const Footer = React.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => {
    const { items } = props;

    const [selected, setSelected] = React.useState(props.selected);

    const router = useRouter();



    return (
      <>
        <div className="footer">
          <div className="footer-logo">
          <Image
          src="/images/RentWyze.png"
          alt="Image"
          width="85"
          height="85"
          className="footer-image"
        />
            <div className="navbar-brand">RentWyze</div>
          </div>
          <div className="footer-options">
            {footerProps.map((footerProp) => (
              <div className="footer-column">
                <span className="footer-titles">{footerProp.title}</span>
                {footerProp.elements.map((element) => (
                  <a href={element.link} className="footer-section-option">
                    {element.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="below-footer">
            <span>
            @2024 RentWyze. All Rights Reserved.
            </span>
            <a href="#" className="footer-section-option">
            Terms & Conditions
            </a>
        </div>
      </>
    );
  },
);

export { Footer };
