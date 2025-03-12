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

                const testvar = 1;

                const testVar = 2;

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
})