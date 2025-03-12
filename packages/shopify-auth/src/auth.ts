import NextAuth, { DefaultSession } from "next-auth";
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

export const { handlers, signIn, signOut, auth } = NextAuth({
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
                    id: "1",
                    name: "Mr. Bzbz",
                    email: credentials.email as string,
                    shopifyToken: "1234567890"
                }

                return user;
            }
        })
    ],
})