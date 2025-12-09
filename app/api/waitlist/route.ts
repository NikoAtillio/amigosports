import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    
    const { email, name, phone, country, userType, favoriteSport, referralCode, marketingConsent } = body ?? {};

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await prisma?.waitlistSubmission?.create?.({
      data: {
        email: email ?? "",
        name: name ?? "",
        phone: phone ?? null,
        country: country ?? null,
        userType: userType ?? "investor",
        favoriteSport: favoriteSport ?? null,
        referralCode: referralCode ?? null,
        marketingConsent: marketingConsent ?? false,
      },
    });

    return NextResponse.json(
      { success: true, id: submission?.id ?? "" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to save submission. Please try again." },
      { status: 500 }
    );
  }
}
