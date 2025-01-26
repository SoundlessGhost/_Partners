import React from "react";
import { Separator } from "@/components/ui/separator";

const HowWeWork = () => {
  return (
    <>
      <h1 className="text-5xl text-center title ">How We Works?</h1>
      <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-6 border-t-2 rounded-full" />
      <p className="mb-20 text-sm text-center">
        Embark on Your Journey: The Alliance Experience Unveiled.
      </p>
      <div className="lg:grid space-y-8 lg:space-y-0 text-center grid-cols-3 gap-4 mx-10">
        <div className="">
          <h1 className="text-3xl font-bold">1</h1>
          <h3 className="font-bold my-2">Initially, Create your Account</h3>
          <p>
            Creating a profile is a prerequisite for users to get the website's
            different types of functionalities.
          </p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">2</h1>
          <h3 className="font-bold my-2">Search Your Meaningful Bonds</h3>
          <p>
            Browse through diverse profiles, and discover potential life
            Alliance like your personal preference.
          </p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">3</h1>
          <h3 className="font-bold my-2">Begin Your Forever Journey.</h3>
          <p>
            As you find that, pay for the contact information and embark on a
            journey of shared dreams.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
