import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="m-10 lg:flex justify-between">
        <div className="lg:w-[500px] mb-5 mr-3">
          <h1 className="text-5xl lg:text-center title ">About Us</h1>
          <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-6 border-t-2 rounded-full" />

          <p>
            Welcome to Alliance, the heartwarming chapter where the symphony of
            love orchestrates lifelong unions. Our story begins with the simple
            belief that every heart deserves a counterpart, and every soul
            deserves a companion for lifes extraordinary journey.In the vibrant
            tapestry of matrimony, Alliance stands as a testament to the power
            of connection and the beauty that unfolds when two souls find
            harmony. Founded with passion and purpose, Alliance is more than a
            matrimony platform; its a sanctuary for individuals seeking the
            profound joy of a shared life.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[600px] h-[500px] relative">
          <Image
            src="/nathan.jpg"
            alt="nathan"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="m-10 lg:flex items-center  justify-between">
        <div className="lg:w-[500px] mb-5 mr-3">
          <h1 className="text-5xl lg:text-center title ">Our Story</h1>
          <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-6 border-t-2 rounded-full" />

          <p>
            Our promise is one of inclusivity and respect. Alliance embraces the
            kaleidoscope of races, backgrounds, and traditions, fostering an
            environment where every individual feels embraced and celebrated. In
            the dance of diversity, we find the strength to build connections
            that transcend boundaries.Security and privacy form the pillars of
            our commitment to you.
          </p>
        </div>

        <div className="lg:flex lg:space-x-10 md:space-x-10 md:flex shadow-lg p-4 rounded-md">
          <div className="lg:text-center">
            <Image
              src="/Max.jpg"
              alt="nathan"
              width={220}
              height={220}
              className="rounded-md mb-3 h-24 w-24 object-cover"
            />
            <p>Richard</p>
            <p className="text-[13px]">CEO</p>
          </div>

          <div className="lg:text-center ">
            <Image
              src="/shahed4.jpg"
              alt="nathan"
              width={220}
              height={220}
              // objectFit="cover/"
              className="rounded-md border mb-3 h-24 w-24 object-cover"
            />
            <p>Shahed</p>
            <p className="text-[13px]">Coordinator</p>
          </div>

          <div className="lg:text-center">
            <Image
              src="/New1.jpg"
              alt="nathan"
              width={220}
              height={220}
              // objectFit="cover/"
              className="rounded-md mb-3 h-24 w-24 object-cover"
            />
            <p>Tomlinson</p>
            <p className="text-[13px]">Chief Officer</p>
          </div>

          <div className="lg:text-center">
            <Image
              src="/New2.jpg"
              alt="nathan"
              width={220}
              height={220}
              // objectFit="cover/"
              className="rounded-md mb-3 h-24 w-24 object-cover"
            />
            <p>Nayem</p>
            <p className="text-[13px]">CTO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
