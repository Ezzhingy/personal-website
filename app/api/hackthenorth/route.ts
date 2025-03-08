import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const hackthenorthSnapshot = await db
    .collection("count")
    .doc("hackthenorth")
    .get();
  const hackthenorthCount = hackthenorthSnapshot.data()?.count || 0;
  return NextResponse.json({ count: hackthenorthCount });
}

export async function POST(request: Request) {
  try {
    const hackthenorthCountRef = db.collection("count").doc("hackthenorth");
    await hackthenorthCountRef.set(
      { count: FieldValue.increment(1) },
      { merge: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
