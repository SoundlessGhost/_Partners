import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const Faq = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="mx-auto w-full max-w-[600px] h-[500px] relative">
          <Image
            src="/FAQs-cuate.png"
            alt="FAQs Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p className="text-5xl -mt-10 title">Frequently Asked Questions</p>
        <Separator className="w-20 border-[#1f4037] mx-auto my-4 border-t-2 rounded-full" />

        <p className="mt-10">
          Here are answers to some common questions that might help you better
          understand how we work and how you can get involved.
        </p>
      </div>

      <div className="mx-10 my-10">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-gray-50 px-4">
            <AccordionTrigger>
              How do I create a profile on the Matrimony platform?
            </AccordionTrigger>
            <AccordionContent>
              Creating a profile is easy! Simply click on the &quot;Sign
              Up&quot; button, fill in your details, upload a photo, and
              you&apos;re ready to start your journey to find a life Alliance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-gray-50 px-4">
            <AccordionTrigger>
              Is my information secure on this Matrimony website?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we prioritize the security and privacy of your information.
              Our platform employs advanced encryption and security measures to
              safeguard your data, providing you with a safe and secure
              environment as you search for your life Alliance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-gray-50 px-4">
            <AccordionTrigger>
              Can I specify preferences for my potential life Alliance?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Our platform allows you to set preferences for age,
              height, occupation, and more. This ensures that you connect with
              individuals who match your criteria and share similar life goals.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
