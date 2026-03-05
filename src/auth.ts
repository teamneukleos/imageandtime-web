import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./app/lib/db";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

// Full config with providers for API routes (Node.js runtime only)
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await db.user.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          // Only allow ADMIN and EDITOR roles to sign in
          if (user.role !== "ADMIN" && user.role !== "EDITOR") {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  // Helpful while debugging
  debug: process.env.NODE_ENV === "development",
});