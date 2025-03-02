import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const faireSnapshot = await db.collection("count").doc("faire").get();
  const faireCount = faireSnapshot.data()?.count || 0;
  return NextResponse.json({ count: faireCount });
}

export async function POST(request: Request) {
  try {
    const faireRef = db.collection("count").doc("faire");
    await faireRef.set({ count: FieldValue.increment(1) }, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
