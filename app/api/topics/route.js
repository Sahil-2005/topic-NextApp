import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();
    const { title, description } = await request.json();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic create"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find()
    return NextResponse.json({topics}, {status: 201});
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"}, {status: 200});
}