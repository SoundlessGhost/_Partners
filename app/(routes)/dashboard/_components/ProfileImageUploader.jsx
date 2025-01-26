"use client";

import Image from "next/image";
import prisma from "@/lib/prisma";
import toast from "react-hot-toast";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadthing";
import axios from "axios";

const ProfileImageUploader = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch profile image
  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get(`/api/profiles`);
        setImageUrl(response.data.profileImage || null);
      } catch (error) {
        console.error("Error fetching profile image:", error);
        toast.error("Failed to fetch profile image.");
      }
    };

    fetchProfileImage();
  }, [userId]);

  // Handle image upload and update
  const handleUploadComplete = async (res) => {
    const uploadedUrl = res?.[0]?.url;
    if (!uploadedUrl) return;

    setLoading(true);
    try {
      await axios.patch(`/api/profiles`, {
        imageUrl: uploadedUrl,
      });

      setImageUrl(uploadedUrl);
      toast.success("Profile image updated successfully.");
    } catch (error) {
      console.error("Error updating profile image:", error);
      toast.error("Failed to update profile image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-200 p-4 rounded-md">
      <Label className="text-sm font-[600] mb-2">Profile Image</Label>

      <div className="relative mb-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            height={150}
            width={150}
            alt="Profile Image"
            className="object-cover rounded-full border border-gray-300"
          />
        ) : (
          <div className="h-[150px] w-[150px] rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <UploadDropzone
        endpoint="profileImage"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error) => {
          toast.error(error.message);
        }}
      />

      {/* {loading && (
        <div className="flex items-center justify-center mt-2">
          <Loader2 className="animate-spin" />
        </div>
      )} */}
    </div>
  );
};

export default ProfileImageUploader;
