import Project from "../../(models)/Project";
import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: projectTitle,
    newShortDescr: shortDescription,
    newDescription: description,
    newLogoImg: logo,
  } = await request.json();
  await connectMongoDB();
  await Project.findByIdAndUpdate(id, {
    projectTitle,
    logo,
    description,
    shortDescription,
  });

  return NextResponse.json({ message: "Project Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project }, { stauts: 200 });
}

// PUT Function here for UpdateById
