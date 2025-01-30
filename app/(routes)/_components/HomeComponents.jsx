"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HomeComponents = () => {
  return (
    <div
      className="lg:bg-cover h-[100vh] text-center absolute top-0 flex flex-col p-8 justify-center items-center"
      style={{
        backgroundImage: "url(/plan.jpg)",
      }}
    >
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="space-y-6"
      >
        <h1 className="lg:text-5xl mt-16 text-3xl font-bold">
          Find Love, Build Dreams! Your Journey Begins With Alliance !
        </h1>
        <p className=" italic">
          Embark on a wonderful journey at Alliance, where you can explore the
          beauty of relationships as you navigate through a space that
          celebrates the simplicity and warmth of genuine connections.
        </p>
        <Link href={"/about"}>
          <Button className="font-bold mt-4">Learn More</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeComponents;
