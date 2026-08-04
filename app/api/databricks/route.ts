import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const databricksSnapshot = await db
    .collection("count")
    .doc("databricks")
    .get();
  const databricksCount = databricksSnapshot.data()?.count || 0;
  return NextResponse.json({ count: databricksCount });
}

export async function POST(request: Request) {
  try {
    const databricksCountRef = db.collection("count").doc("databricks");
    await databricksCountRef.set(
      { count: FieldValue.increment(1) },
      { merge: true },
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
