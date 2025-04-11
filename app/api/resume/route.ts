import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import Resume from '@/models/Resume';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const resume = await Resume.findOne({});
    return NextResponse.json(resume);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await mongoose.connect(process.env.MONGODB_URI!);
    const resume = await Resume.findOneAndUpdate(
      {}, // empty filter to update first document
      body,
      { upsert: true, new: true }
    );
    return NextResponse.json(resume);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update resume' }, { status: 500 });
  }
}
