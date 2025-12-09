import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await prisma?.contactSubmission?.create?.({
      data: {
        name: name ?? "",
        email: email ?? "",
        subject: subject ?? "",
        message: message ?? "",
        status: "new",
      },
    });

    return NextResponse.json(
      { success: true, id: submission?.id ?? "" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to save message. Please try again." },
      { status: 500 }
    );
  }
}
