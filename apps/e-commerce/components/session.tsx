'use client';

import { useSession } from "@repo/shopify-auth/client";

export default function SessionCheck() {
    const { data: session } = useSession()

    console.log('Session:', session);

    return (
        <div>
            <h1>
                {session && session.user.name}
            </h1>
        </div>
    );
}