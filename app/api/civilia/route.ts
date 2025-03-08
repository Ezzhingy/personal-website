import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const civiliaSnapshot = await db.collection("count").doc("civilia").get();
  const civiliaCount = civiliaSnapshot.data()?.count || 0;
  return NextResponse.json({ count: civiliaCount });
}

export async function POST(request: Request) {
  try {
    const civiliaCountRef = db.collection("count").doc("civilia");
    await civiliaCountRef.set(
      { count: FieldValue.increment(1) },
      { merge: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
