import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import { handlers, auth } from "./auth";

export { signIn, signOut, useSession, SessionProvider, auth, handlers };