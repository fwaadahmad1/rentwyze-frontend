import CardScroll from "@/components/common/card-scroll";
import { FAQCard, FAQTitle } from "@/components/home/FAQCard";
import { InfoCard, MainContent } from "@/components/home/MainContent";

const faqItems = [
  {
    name: "How do I search for properties on RentWyze?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    name: "What documents do I need to use RentWyze?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    name: "How can I contact a landlord on RentWyze?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    name: "How can I connect with suitable tenants?",
    description: "Find and connect with suitable tenants through our platform.",
  },
  {
    name: "How can I find the best properties?",
    description:
      "Browse through numerous helpful reviews to find the most suitable property for you.",
  },
];

export default function Home() {
  return (
    <main>
      <MainContent />
      <FAQTitle className="max-w-7xl" />
      <CardScroll
        data={faqItems}
        render={(item, index) => (
          <FAQCard
            key={index}
            name={item.name}
            description={item.description}
          />
        )}
      />
      <InfoCard className="max-w-7xl" />
    </main>
  );
}
