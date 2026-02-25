"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminSignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/admin/dashboard",
      });

      if (result?.error) {
        console.error("Sign in error:", result.error);
        setError(result.error === "CredentialsSignin" 
          ? "Invalid email or password" 
          : "An error occurred. Please try again.");
      } else if (result?.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError("An unexpected error occurred");
      }
    } catch (err) {
      console.error("Sign in exception:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');
      `}</style>
      <div style={{ 
        background: "#1a1a1a", 
        border: "1px solid #222", 
        borderRadius: "16px", 
        padding: "48px", 
        width: "100%", 
        maxWidth: "420px",
        fontFamily: "'DM Mono', monospace"
      }}>
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <img 
            src="/logo/logo.svg" 
            alt="Logo" 
            style={{ width: 140, height: "auto", marginBottom: "24px", objectFit: "contain" }} 
          />
          <h1 style={{ 
            fontFamily: "'Syne', sans-serif", 
            fontSize: "24px", 
            fontWeight: 700, 
            color: "#fff", 
            marginBottom: "8px" 
          }}>
            Admin Sign In
          </h1>
          <p style={{ fontSize: "12px", color: "#555", letterSpacing: "0.08em" }}>
            Enter your credentials to access the dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              fontSize: "10px", 
              letterSpacing: "0.12em", 
              textTransform: "uppercase", 
              color: "#555", 
              marginBottom: "8px" 
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                background: "#111111",
                border: "1px solid #2a2a2a",
                borderRadius: "8px",
                padding: "12px 14px",
                color: "#e8e8e8",
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#fff"}
              onBlur={(e) => e.target.style.borderColor = "#2a2a2a"}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{ 
              display: "block", 
              fontSize: "10px", 
              letterSpacing: "0.12em", 
              textTransform: "uppercase", 
              color: "#555", 
              marginBottom: "8px" 
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                background: "#111111",
                border: "1px solid #2a2a2a",
                borderRadius: "8px",
                padding: "12px 14px",
                color: "#e8e8e8",
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#fff"}
              onBlur={(e) => e.target.style.borderColor = "#2a2a2a"}
            />
          </div>

          {error && (
            <div style={{ 
              background: "#1a0808", 
              border: "1px solid #ff4444", 
              borderRadius: "8px", 
              padding: "12px", 
              marginBottom: "20px",
              color: "#ff4444",
              fontSize: "12px",
              textAlign: "center"
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#2a2a2a" : "#fff",
              color: loading ? "#666" : "#000",
              border: "none",
              borderRadius: "8px",
              padding: "12px 20px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.background = "#e8e8e8";
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.background = "#fff";
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

