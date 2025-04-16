import { NextResponse } from "next/server";
import mongoose from "mongoose";
import News from "@/models/news";

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    const newsData = await News.find({});
    return NextResponse.json({ success: true, data: newsData });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json({ success: false, error: "Something went wrong" });
  }
}