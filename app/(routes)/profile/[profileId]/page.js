"use client";

import axios from "axios";
import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import ProfileCard from "@/components/ProfileCard";

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, Loader2, X } from "lucide-react";

const ProfileIdPage = ({ params }) => {
  const { userId } = useAuth();

  const router = useRouter();
  const profileId = React.use(params).profileId;

  const [profile, setProfile] = useState({});
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // fetch single profile function

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios(
          `https://alliance2247.vercel.app/api/profiles/${profileId}`
        );
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  // fetch all profile function

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setIsLoading(true);

        const res = await axios("https://alliance2247.vercel.app/api/profiles");
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

  const imageUrl =
    profile.imageUrl && profile.imageUrl !== ""
      ? profile.imageUrl
      : "/default-profile.jpg";

  // handle delete single profile function

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this profile?"
    );
    if (!isConfirmed) return;

    setLoading(true);
    try {
      await axios.delete(
        `https://alliance2247.vercel.app/api/profiles/${profileId}`
      );

      toast.success("Profile deleted successfully");
      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading && isLoading) {
    return (
      <div className="w-full mt-10 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <>
      {/* <div className="absolute right-0 mt-9 mr-16">
        <X className="cursor-pointer" onClick={() => handleDelete()} />
      </div> */}

      <div className="lg:flex justify-between mt-20 shadow-lg p-10 rounded-lg mx-10 items-center block">
        <div className="space-y-4 mb-10">
          <Image
            height={200}
            width={200}
            alt={profile.Name || "Profile Image"}
            src={imageUrl}
            className="object-cover w-56 h-56 mr-6 rounded-full"
          />
          <p className="text-4xl font-bold line-clamp-1">{profile.Name}</p>
          <p className="flex items-center text-2xl">
            <BriefcaseBusiness size={24} className="mr-4" />
            {profile.Occupation}
          </p>

          <div className="flex space-x-3">
            <Button>Add to Favorite</Button>
            <Button>Request a Call</Button>
          </div>
        </div>

        <div className="space-y-4">
          <p>
            <span className="font-bold">Age: </span> {profile.Age} Years Old
          </p>
          <p>
            <span className="font-bold">Expected Partner Age: </span>
            {profile.ExpectedPartnerAge} Years Old
          </p>
          <p>
            <span className="font-bold">Type: </span> {profile.Type}
          </p>
          <p>
            <span className="font-bold">Face: </span> {profile.Face}
          </p>
          <p>
            <span className="font-bold">Father&apos;s Name: </span>{" "}
            {profile.FatherName}
          </p>
          <p>
            <span className="font-bold">Mother&apos;s Name: </span>{" "}
            {profile.MotherName}
          </p>
          <p>
            <span className="font-bold">Date Of Birth: </span>
            {profile.DateOfBirth}
          </p>
          <p>
            <span className="font-bold">Weight: </span> {profile.Weight}
          </p>
          <p>
            <span className="font-bold">Expected Partner Weight: </span>
            {profile.ExpectedPartnerWeight}
          </p>
          <p>
            <span className="font-bold">Height: </span> {profile.Height}
          </p>
          <p>
            <span className="font-bold">Expected Partner Height: </span>
            {profile.ExpectedPartnerHeight}
          </p>
          <p>
            <span className="font-bold">Present Address: </span>
            {profile.PresentDivision}
          </p>
          <p>
            <span className="font-bold">Permanent Address: </span>
            {profile.PermanentDivision}
          </p>
        </div>
      </div>

      {/* Related Profile */}

      <h1 className="text-5xl text-center title mt-20">Related Profile</h1>
      <Separator className="w-12 border-[#1f4037] mx-auto mt-4 mb-6 border-t-2 rounded-full" />
      <div className="grid mt-20 mx-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {profiles.slice(12, 18).map((item, i) => (
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
    </>
  );
};

export default ProfileIdPage;
