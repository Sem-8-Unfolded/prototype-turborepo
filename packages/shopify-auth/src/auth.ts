import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user: {
            shopifyToken: string;
        } & DefaultSession["user"];
    }
    interface User {
        shopifyToken: string;
    }
}

const defaultOptions: NextAuthConfig = {
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.shopifyToken = user.shopifyToken;
            }
            return token;
        },
        session({ session, token }) {
            session.user.shopifyToken = token.shopifyToken as string;
            return session;
        },
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                console.log("Credentials within package:", credentials);

                const user = {
                    id: "478568",
                    name: "Bzbz",
                    email: credentials.email as string,
                    shopifyToken: "32j5hb3nmib4n43j5y09fgbmv0434bfg09b8d8d9b9if9ibf"
                }

                return user;
            }
        })
    ],
};

export function shopifyAuth(customOptions: Partial<NextAuthConfig> = {}) {
    return NextAuth({
        ...customOptions,
        callbacks: customOptions.callbacks || defaultOptions.callbacks,
        providers: customOptions.providers || defaultOptions.providers,
    });
}

export const { handlers, signIn, signOut, auth } = shopifyAuth(defaultOptions);