import React from 'react';
import { auth } from '@repo/shopify-auth/auth';

export default async function Navbar() {
    const session = await auth();

    console.log('Session:', session);

    return (
        <nav className="p-4 border-b border-solid border-black/[.08] dark:border-white/[.145]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">E-Commerce</div>
                <div className="space-x-4">
                    {
                        session ? (
                            <div className="flex items-center space-x-4">
                                <div>{session.user.name}</div>
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