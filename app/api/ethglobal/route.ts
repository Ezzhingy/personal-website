import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const ethglobalSnapshot = await db.collection("count").doc("ethglobal").get();
  const ethglobalCount = ethglobalSnapshot.data()?.count || 0;
  return NextResponse.json({ count: ethglobalCount });
}

export async function POST(request: Request) {
  try {
    const ethglobalCountRef = db.collection("count").doc("ethglobal");
    await ethglobalCountRef.set(
      { count: FieldValue.increment(1) },
      { merge: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
