"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const errorParam = searchParams.get("error");
    setError(errorParam);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <div style={{ 
        background: "#1a1a1a", 
        border: "1px solid #ff4444", 
        borderRadius: "16px", 
        padding: "48px", 
        width: "100%", 
        maxWidth: "420px",
        fontFamily: "'DM Mono', monospace",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontSize: "24px", 
          fontWeight: 700, 
          color: "#ff4444", 
          marginBottom: "16px" 
        }}>
          Authentication Error
        </h1>
        <p style={{ fontSize: "14px", color: "#e8e8e8", marginBottom: "24px" }}>
          {error || "An unknown error occurred"}
        </p>
        <a 
          href="/admin/sign-in"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Back to Sign In
        </a>
      </div>
    </div>
  );
}

