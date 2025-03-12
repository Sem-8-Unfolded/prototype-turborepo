"use client";

import Button from "@repo/ui/button";
import { signIn, SessionProvider } from "@repo/shopify-auth";
import SessionCheck from "../../../components/session";

export default function LoginPage() {
    const handleSubmit = async () => {
        const email = "bzbz@bzbz.bzbz";
        const password = "bzbzbzbz";

        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const response: any = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            console.log({ response });

            console.log("Login Successful", response);
        } catch (error: any) {
            console.error("Login Failed:", error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <SessionProvider>
                <SessionCheck />
            </SessionProvider>

            <Button onClick={() => handleSubmit()} content="Sign in" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" />
        </div>
    );
}