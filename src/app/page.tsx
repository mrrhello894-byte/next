import { CardDemo } from "@/components/cards/CardDemoComponent";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// static seo implement
export const metadata: Metadata = {
  title: "%s | Thana",
  description: "This page is review the overal of concept with selling products, listing e-commerce website purposes.",
};

export default function Home() {
  return (
   <section>
    Hello From Thana x Who Shop
    <h2>Shopping Now</h2>

    {/* using button from shadcn ui */}
    {/* <Button className={'bg-red-500'}>Button</Button> */}

    {/* calling card component */}
     <CardDemo/>
     
   </section>
  );
}
