"use client";
import axios from "axios";
import toast from "react-hot-toast";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/lib/uploadthing";

const EditPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const createProfile = async (data) => {
    setLoading(true);

    const profile = {
      imageUrl,
      Age: data.Age,
      Type: data.Type,
      Name: data.Name,
      Face: data.Face,
      Email: data.Email,
      Phone: data.Phone,
      Height: data.Height,
      Weight: data.Weight,
      Occupation: data.Occupation,
      MotherName: data.MotherName,
      FatherName: data.FatherName,
      DateOfBirth: data.DateOfBirth,
      PresentDivision: data.PresentDivision,
      PermanentDivision: data.PermanentDivision,
      ExpectedPartnerAge: data.ExpectedPartnerAge,
      ExpectedPartnerHeight: data.ExpectedPartnerHeight,
      ExpectedPartnerWeight: data.ExpectedPartnerWeight,
    };

    try {
      await axios.post("/api/profiles", profile);

      toast.success("Profile Created");
      reset();
    } catch (error) {
      toast.error("Something Went Wrong", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="m-20" onSubmit={handleSubmit(createProfile)}>
      <div className="p-4 rounded-md bg-slate-300 mb-20">
        <div>
          <UploadDropzone
            endpoint="profileImage"
            onClientUploadComplete={(res) => {
              setImageUrl(res?.[0]?.url);
            }}
            onUploadError={(error) => {
              toast.error(`${error?.message}`);
            }}
          />
        </div>

        {!imageUrl && (
          <p className="text-sm text-slate-600 italic">No image yet</p>
        )}

        {imageUrl && <h1 className="text-sm mt-3 ">{imageUrl}</h1>}
      </div>

      {/* input field */}

      <div className="flex justify-between">
        <div className="space-y-6">
          <div>
            <Label className="font-bold mb-5" htmlFor="Name">
              Name
            </Label>

            <Input
              id="Name"
              {...register("Name", { required: "Name is required" })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Name"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Type">
              Profile Type
            </Label>
            <Input
              id="Type"
              {...register("Type", { required: "Profile Type is required" })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Type"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Occupation">
              Occupation
            </Label>

            <Input
              id="Occupation"
              {...register("Occupation", {
                required: "Occupation is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Occupation"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="MotherName">
              Mother Name
            </Label>

            <Input
              id="MotherName"
              {...register("MotherName", {
                required: "MotherName is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Mother Name"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="FatherName">
              Father Name
            </Label>

            <Input
              id="FatherName"
              {...register("FatherName", {
                required: "FatherName is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Father Name"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Height">
              Height
            </Label>

            <Input
              id="Height"
              {...register("Height", {
                required: "Height is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Height"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Weight">
              Weight
            </Label>

            <Input
              id="Weight"
              {...register("Weight", {
                required: "Weight is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Weight"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="ExpectedPartnerAge">
              Expected Partner Age
            </Label>

            <Input
              id="ExpectedPartnerAge"
              {...register("ExpectedPartnerAge", {
                required: "ExpectedPartnerAge is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Expected Partner Age"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Email">
              Email
            </Label>

            <Input
              id="Email"
              {...register("Email", {
                required: "Email is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="font-bold mb-5" htmlFor="Age">
              Age
            </Label>

            <Input
              id="Age"
              {...register("Age", {
                required: "Age is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Age"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="DateOfBirth">
              Date of Birth
            </Label>

            <Input
              id="DateOfBirth"
              {...register("DateOfBirth", {
                required: "DateOfBirth is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Date of Birth"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Face">
              Face
            </Label>

            <Input
              id="Face"
              {...register("Face", {
                required: "Face is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Face"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="PresentDivision">
              Present Division
            </Label>

            <Input
              id="PresentDivision"
              {...register("PresentDivision", {
                required: "PresentDivision is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Present Division"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="PermanentDivision">
              Permanent Division
            </Label>

            <Input
              id="PermanentDivision"
              {...register("PermanentDivision", {
                required: "PermanentDivision is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Permanent Division"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="ExpectedPartnerHeight">
              Expected Partner Height
            </Label>

            <Input
              id="ExpectedPartnerHeight"
              {...register("ExpectedPartnerHeight", {
                required: "ExpectedPartnerHeight is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Expected Partner Height"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="ExpectedPartnerWeight">
              Expected Partner Weight
            </Label>

            <Input
              id="ExpectedPartnerWeight"
              {...register("ExpectedPartnerWeight", {
                required: "ExpectedPartnerWeight is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Expected Partner Weight"
            />
          </div>

          <div>
            <Label className="font-bold mb-5" htmlFor="Phone">
              Phone
            </Label>

            <Input
              id="Phone"
              {...register("Phone", {
                required: "Phone is required",
              })}
              className="bg-neutral-100 border-0 mt-2 w-96"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>

      <Button className="w-40 mt-6" disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : "Submit"}
      </Button>
    </form>
  );
};

export default EditPage;
