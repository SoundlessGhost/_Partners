import { auth } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  profileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async (req) => {
      console.log("Request received for file upload");
      return {}; // No user validation, no userId returned
    })
    .onUploadComplete((res) => {
      console.log("Course image upload complete:", res);
    }),
};
