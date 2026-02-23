import { SignIn } from "@clerk/nextjs";

export default function AdminSignInPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <SignIn />
    </div>
  );
}