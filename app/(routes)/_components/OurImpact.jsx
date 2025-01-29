"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const OurImpact = () => {
  return (
    <div>
      <div className="mx-10 my-40 lg:flex justify-between">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="lg:w-[500px] mb-5 mr-3"
        >
          <h1 className="text-5xl text-center title ">Our Impact</h1>
          <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-6 border-t-2 rounded-full" />
          <p className="mb-20 text-sm text-center">
            Making a Difference: Our Impact on Matrimonial Journeys
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <h1 className="text-3xl font-bold">15</h1>
              <h3 className="font-bold my-2">Total Profiles</h3>
              <p>
                Unlock a World of Possibilities: Explore Our Total Profiles for
                Your Perfect Match.
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold">9</h1>
              <h3 className="font-bold my-2">Total Male Profile</h3>
              <p>
                Unlock a World of Possibilities: Explore Our Total Profiles for
                Your Perfect Match.
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold">6</h1>
              <h3 className="font-bold my-2">Total Female Profile</h3>
              <p>
                Unlock a World of Possibilities: Explore Our Total Profiles for
                Your Perfect Match.
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold">18+</h1>
              <h3 className="font-bold my-2">Total Marriages</h3>
              <p>Making a Difference: Our Impact on Matrimonial Journeys</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mx-auto w-full max-w-[500px] h-[600px] relative"
        >
          <Image
            src="/couple.jpg"
            alt="nathan"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurImpact;
