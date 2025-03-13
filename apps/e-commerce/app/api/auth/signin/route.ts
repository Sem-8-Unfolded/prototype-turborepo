import { signIn } from "@repo/shopify-auth/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log("Attempting login...");
        const { email, password } = await req.json();
        const user = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (user) {
            return NextResponse.json({ message: "Sign in successful", user });
        } else {
            return NextResponse.json({ message: "Invalid email or password" });
        }
    } catch (error: any) {
        return NextResponse.json({ message: "Internal server error", error: error.message });
    }
}