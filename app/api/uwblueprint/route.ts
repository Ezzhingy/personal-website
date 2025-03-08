import { db } from "@/functions/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const uwblueprintSnapshot = await db
    .collection("count")
    .doc("uwblueprint")
    .get();
  const uwblueprintCount = uwblueprintSnapshot.data()?.count || 0;
  return NextResponse.json({ count: uwblueprintCount });
}

export async function POST(request: Request) {
  try {
    const uwblueprintCountRef = db.collection("count").doc("uwblueprint");
    await uwblueprintCountRef.set(
      { count: FieldValue.increment(1) },
      { merge: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
