import { shopifyAuth, getAuthFunctions } from "@repo/shopify-auth/auth";
import Credentials from "next-auth/providers/credentials";

const customAuthOptions: any = {
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.customToken = user.customToken;
                token.shopifyToken = user.shopifyToken;
                if (user.address) {
                    token.address = user.address;
                }
            }
            return token;
        },
        session({ session, token }) {
            session.user.customToken = token.customToken as string;
            session.user.address = token.address as {
                street: string;
                city: string;
                country: string;
            };
            return session;
        },
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log("Credentials within package (NON-DEFAULT):", credentials);

                const user = {
                    id: "999999",
                    name: "Grr Grrrr",
                    email: credentials.email as string,
                    shopifyToken: "bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
                    customToken: "vfdvdvd",
                    address: {
                        street: "123 Fake St",
                        city: "Faketown",
                        country: "Fake Country"
                    }
                }

                return user;
            }
        })
    ],
};

shopifyAuth(customAuthOptions);

const { signIn } = getAuthFunctions();

export { signIn };