import { NextAuthConfig } from "next-auth";

// Lightweight config for middleware (Edge-compatible)
// This doesn't include actual provider implementations or database connections
export const authConfig: NextAuthConfig = {
  providers: [], // Empty array for middleware - providers are only needed in API routes
  pages: {
    signIn: "/admin/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        (token as any).role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).id;
        (session.user as any).role = (token as any).role;
      }
      return session;
    },
  },
};

