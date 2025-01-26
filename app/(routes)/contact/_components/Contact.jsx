"use client";

import toast from "react-hot-toast";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Send = () => {
    toast.success("Message sent");
    reset();
  };
  return (
    <div className="lg:mx-20 mx-4 ">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="shadow-lg p-6 rounded-lg"
      >
        <h1 className="text-5xl text-center title mb-6 ">Sent us a message</h1>
        <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-10 border-t-2 rounded-full" />

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit(Send)}>
          <div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0  ">
            <Input
              id="fname"
              {...register("name", { required: "Name is required" })}
              className="bg-neutral-100 border-0"
              placeholder="First Name"
            />
            <Input
              id="lname"
              {...register("lname", { required: "Name is required" })}
              className="bg-neutral-100 border-0"
              placeholder="Last Name"
            />
          </div>

          <div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0 ">
            <Input
              id="phone"
              {...register("phone", { required: "Name is required" })}
              className="bg-neutral-100 border-0"
              placeholder="Phone"
            />
            <Input
              id="email"
              {...register("email", { required: "Name is required" })}
              className="bg-neutral-100 border-0"
              placeholder="Email"
            />
          </div>

          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="bg-neutral-100 rounded p-2 w-full"
            placeholder="Leave Your Message ..."
            rows="5"
          ></textarea>

          <Button className="w-20">Submit</Button>
        </form>
      </motion.div>

      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="p-8 rounded-lg text-center ContactBg mt-10 text-white"
      >
        <h1 className="text-4xl mb-4">Drop in our office</h1>
        <p>
          Visit Us Today: Where Dreams Meet Reality, Drop by Our Office to Begin
          Your Journey.
        </p>
        <h1 className="text-2xl text-start my-2">Main Office</h1>
        <p className="text-start">
          123 Elm Street, London, SW1A 1AA, United Kingdom
        </p>

        <h1 className="text-2xl text-start my-2">Call Us</h1>
        <p className="text-start">
          Tel: +44 20 1234 5678 <br /> Fax: (123)-456-7890
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
