import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const palantirSnapshot = await db.collection("count").doc("palantir").get();
  const palantirCount = palantirSnapshot.data()?.count || 0;
  return NextResponse.json({ count: palantirCount });
}

export async function POST(request: Request) {
  try {
    const palantirCountRef = db.collection("count").doc("palantir");
    await palantirCountRef.set(
      { count: FieldValue.increment(1) },
      { merge: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
