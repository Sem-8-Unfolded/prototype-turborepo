"use client";

import { SessionProvider } from "@repo/shopify-auth/client";
// import { signIn } from "@repo/shopify-auth/client";
import SessionCheck from "../../../components/session";
import Button from "@repo/ui/button";

export default function LoginPage() {

    const handleSubmit = async () => {
        const email = "bzbz@bzbz.bzbz";
        const password = "bzbzbzbz";

        console.log('Email:', email);
        console.log('Password:', password);

        try {
            console.log("Server login");
            
            const response = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("Successful signin data:", data);

            // console.log("client login");
            // signIn("credentials", {
            //     email,
            //     password,
            //     redirect: false,
            // });

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
            <Button onClick={handleSubmit} content="Sign in" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" />
        </div>
    );
}