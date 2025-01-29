"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2, MapPin, UserCircle, Weight } from "lucide-react";

const ProfilePage = () => {
  const { userId } = useAuth();

  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(`/api/profiles`);

        setProfiles(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setProfiles([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (!userId) {
    return redirect("/sign-in");
  }

  if (isLoading) {
    return (
      <div className="w-full mt-10 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div
        className="bg-cover h-[400px] w-full text-center  absolute top-0 flex flex-col p-8 justify-center items-center"
        style={{
          backgroundImage: "url(/images/imani.jpg)",
        }}
      >
        <h1 className="text-5xl text-center title ">Profiles</h1>
        <Separator className="w-12 border-[#1f4037] mx-auto my-4 border-t-2 rounded-full" />
        <p className="text-sm text-center">
          Explore the beauty of relationships as you navigate through a space
        </p>
      </div>

      <div className="grid mx-8 mt-[400px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {profiles.map((item, i) => (
          <div
            key={i}
            className="group hover:shadow-md transition rounded-lg border h-full overflow-hidden"
          >
            <div className="aspect-video CardBg p-3 flex relative rounded-md w-full overflow-hidden">
              {item.imageUrl ? (
                <Image
                  height={200}
                  width={200}
                  alt={"Image"}
                  src={item.imageUrl}
                  className="object-cover w-24 h-24 mr-6 rounded-full"
                />
              ) : (
                <div className="w-24 h-24 mr-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white">No Image</span>
                </div>
              )}

              <div className="flex flex-col pt-2">
                <p className="text-2xl font-medium line-clamp-1  transition">
                  {item.Name}
                </p>
                <p className="text-xs">
                  I&apos;m from {item.PermanentDivision.split(" ")[1]}. I work
                  as a {item.Occupation}.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-3 font-[800]">
              <p className="text-lg flex items-center font-medium line-clamp-1 md:text-base transition group-hover:text-sky-700">
                <MapPin size={16} className="mr-1" />
                {item.PresentDivision}
              </p>
              <p className=" text-slate-600 text-sm flex items-center my-3">
                <UserCircle size={16} className="mr-1" />
                {item.Age} Years Old
              </p>
              <p className=" text-slate-600 flex items-center text-sm font-[800]">
                <Weight size={16} className="mr-1" />
                {item.Weight}
              </p>
            </div>

            <Link href={`/profile/${item.id}`}>
              <Button variant="ghost" className="border m-3  font-bold">
                View Profile
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfilePage;
