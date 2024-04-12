// import Project from "@/app/(models)/Project";
import Project from "../../(models)/Project";
import { NextResponse } from "next/server";
import mongoose, { Schema } from "mongoose";
import connectMongoDB from '../../libs/mongodb'
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log("Erorr connecting", error);
  });
mongoose.Promise = global.Promise;

export async function POST(req) {
  try {
    const body = await req.json();
    const projectData = body.formData;
    console.log(projectData);
    await Project.create(projectData);

    return NextResponse.json({ message: "Project Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await Project.find();
    return NextResponse.json({ projects }, { stauts: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
