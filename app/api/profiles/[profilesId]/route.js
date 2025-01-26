import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request, { params }) {
  try {
    const { profilesId } = params;
    if (!profilesId) {
      return NextResponse.json(
        { message: "Bad Request: profiles ID parameter is missing" },
        { status: 400 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { id: profilesId },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Not Found: profile not found for the given profile" },
        { status: 404 }
      );
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized: User not authenticated" },
        { status: 401 }
      );
    }

    const { profilesId } = params;
    if (!profilesId) {
      return NextResponse.json(
        { message: "Bad Request: profiles ID parameter is missing" },
        { status: 400 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { id: profilesId },
      select: { id: true },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Unauthorized: Profile not matched" },
        { status: 401 }
      );
    }

    const body = await request.json();
    if (!body) {
      return NextResponse.json(
        { message: "Bad Request: Body is missing" },
        { status: 400 }
      );
    }

    const updatedProfiles = await prisma.profile.update({
      where: { id: profilesId },
      data: {
        Age: body.Age,
        Type: body.Type,
        Name: body.Name,
        Face: body.Face,
        Phone: body.Phone,
        Email: body.Email,
        Height: body.Height,
        Weight: body.Weight,
        imageUrl: body.imageUrl,
        Occupation: body.Occupation,
        MotherName: body.MotherName,
        FatherName: body.FatherName,
        DateOfBirth: body.DateOfBirth,
        PresentDivision: body.PresentDivision,
        PermanentDivision: body.PermanentDivision,
        ExpectedPartnerAge: body.ExpectedPartnerAge,
        ExpectedPartnerHeight: body.ExpectedPartnerHeight,
        ExpectedPartnerWeight: body.ExpectedPartnerWeight,
      },
    });

    return NextResponse.json(updatedProfiles, { status: 200 });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { profilesId } = params;
    if (!profilesId) {
      return NextResponse.json(
        { message: "Bad Request: Profile ID parameter is missing." },
        { status: 400 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { id: profilesId },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Not Found: profile does not exist." },
        { status: 404 }
      );
    }

    await prisma.profile.delete({
      where: { id: profilesId },
    });

    return NextResponse.json(
      { message: "profile deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting profile:", error);
    return NextResponse.json(
      { message: "Internal Server Error: Unable to delete profile." },
      { status: 500 }
    );
  }
}
