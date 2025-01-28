"use client";

import axios from "axios";
import ProfileCard from "./ProfileCard";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";

const FeaturedProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch all profile function

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

  return (
    <div className="mt-[750px] mb-20">
      {isLoading ? (
        <p className="text-center">Loading profiles...</p>
      ) : (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <h1 className="text-5xl mt-[750px] text-center title">
            Featured Biodata
          </h1>
          <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-6 border-t-2 rounded-full" />
          <p className="mb-20 text-sm text-center">
            Explore the beauty of relationships as you navigate through a space!
          </p>
        </motion.div>
      )}

      <div className="grid mx-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {profiles.slice(8, 14).map((item, i) => (
          <ProfileCard
            key={i}
            id={item.id}
            Age={item.Age}
            Occupation={item.Occupation}
            weight={item.Weight}
            imageUrl={item.imageUrl}
            Name={item.Name}
            PermanentDivision={item.PermanentDivision}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProfile;
