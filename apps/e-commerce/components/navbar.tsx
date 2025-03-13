"use client";

import React from 'react';
import { useSession, signOut } from "@repo/shopify-auth/client"

export default function Navbar() {
    const session = useSession();
    console.log('Session:', session.data);

    return (
        <nav className="p-4 border-b border-solid border-black/[.08] dark:border-white/[.145]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">E-Commerce</div>
                <div className="space-x-4">
                    {
                        session.data ? (
                            <div className="flex items-center space-x-4">
                                <button onClick={() => signOut()} className="text-white">Logout</button>
                                <div>{session.data.user.name}</div>
                            </div>
                        ) : (
                            <a href="/login" className="text-white">Login</a>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};