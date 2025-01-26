import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { MapPin, UserCircle, Weight } from "lucide-react";


const ProfileCard = ({
  id,
  Age,
  Occupation,
  weight,
  imageUrl,
  Name,
  PermanentDivision,
}) => {
  return (
    <>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="group bg-slate-50  hover:shadow-md transition rounded-lg p-3 border h-full overflow-hidden"
      >
        <div className="aspect-video flex relative rounded-md w-full overflow-hidden">
          <Image
            height={200}
            width={200}
            alt={Name}
            src={imageUrl}
            className="object-cover w-24 h-24 mr-6 rounded-full"
          />
          <div className="flex flex-col pt-2">
            <p className="text-2xl font-medium line-clamp-1  transition group-hover:text-sky-700">
              {Name}
            </p>
            <p className="text-xs text-muted-foreground ">
              I'm from {PermanentDivision.split(" ")[1]}. I Occupation as a {Occupation}.
            </p>
          </div>
        </div>

        <div className="flex flex-col -mt-12 font-[800]">
          <p className="text-lg flex items-center font-medium line-clamp-1 md:text-base transition group-hover:text-sky-700">
            <MapPin size={16} className="mr-1" />
            {PermanentDivision}
          </p>
          <p className=" text-slate-600 text-sm flex items-center my-3">
            <UserCircle size={16} className="mr-1" />
            {Age} Years Old
          </p>
          <p className=" text-slate-600 flex items-center text-sm font-[800]">
            <Weight size={16} className="mr-1" />
            {weight}
          </p>
        </div>

        <div></div>

        <Link href={`/profile/${id}`}>
          <Button variant="ghost" className="border font-bold mt-3">
            View Profile
          </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default ProfileCard;
