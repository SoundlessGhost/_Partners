import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request, { params }) {
  try {
    const profile = await prisma.profile.findMany();

    if (!profile) {
      return NextResponse.json(
        { message: "Not Found: profile not found" },
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

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        { message: "Bad Request: Body is missing" },
        { status: 400 }
      );
    }

    const newProfile = await prisma.profile.create({
      data: {
        Age: body.Age,
        Name: body.Name,
        Type: body.Type,
        Face: body.Face,
        Phone: body.Phone,
        Email: body.Email,
        Height: body.Height,
        Weight: body.Weight,
        imageUrl: body.imageUrl,
        MotherName: body.MotherName,
        FatherName: body.FatherName,
        Occupation: body.Occupation,
        DateOfBirth: body.DateOfBirth,
        PresentDivision: body.PresentDivision,
        PermanentDivision: body.PermanentDivision,
        ExpectedPartnerAge: body.ExpectedPartnerAge,
        ExpectedPartnerHeight: body.ExpectedPartnerHeight,
        ExpectedPartnerWeight: body.ExpectedPartnerWeight,
      },
    });

    return NextResponse.json(newProfile, { status: 201 });
  } catch (error) {
    console.error("Error creating Profile:", error);
    return NextResponse.json(
      { message: "Something went wrong while creating the Profile." },
      { status: 500 }
    );
  }
}
