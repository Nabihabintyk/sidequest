import React from "react";
import {
  Wallet,
  Coffee,
  ShoppingBag,
  ShieldCheck,
  ArrowDownLeft,
} from "lucide-react";

export default function WalletScreen() {
  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "16px",
        fontFamily: "sans-serif",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#38bdf8",
              margin: 0,
            }}
          >
            Nabiha's Wallet
          </h1>
          <p
            style={{ fontSize: "12px", color: "#94a3b8", margin: "4px 0 0 0" }}
          >
            Level 12 Master Helper
          </p>
        </div>
        <span
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            color: "#4ade80",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <ShieldCheck size={14} /> Verified Block
        </span>
      </div>

      {/* Credit Balance Card */}
      <div
        style={{
          background: "linear-gradient(to bottom right, #059669, #0d9488)",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              opacity: 0.9,
            }}
          >
            Civic Credit Balance
          </span>
          <Wallet size={20} />
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
            marginBottom: "12px",
          }}
        >
          145 <span style={{ fontSize: "16px", fontWeight: "normal" }}>CC</span>
        </div>
        <div
          style={{
            fontSize: "12px",
            opacity: 0.9,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            Total Time Given: <strong>14.5 hrs</strong>
          </span>
          <span>
            Streak: <strong>6 Days 🔥</strong>
          </span>
        </div>
      </div>

      {/* Local Rewards */}
      <h3
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#94a3b8",
          marginBottom: "12px",
        }}
      >
        Redeem at Local Shops
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            padding: "12px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Coffee size={18} color="#fbbf24" style={{ marginBottom: "8px" }} />
            <h4
              style={{
                fontSize: "13px",
                margin: "0 0 4px 0",
                color: "#f1f5f9",
              }}
            >
              Free Coffee
            </h4>
            <p style={{ fontSize: "10px", color: "#94a3b8", margin: 0 }}>
              Sarah's Bakery • 150m
            </p>
          </div>
          <button
            style={{
              marginTop: "12px",
              backgroundColor: "#334155",
              color: "#fff",
              border: "none",
              padding: "6px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            20 CC
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            padding: "12px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ShoppingBag
              size={18}
              color="#38bdf8"
              style={{ marginBottom: "8px" }}
            />
            <h4
              style={{
                fontSize: "13px",
                margin: "0 0 4px 0",
                color: "#f1f5f9",
              }}
            >
              10% Off Grocery
            </h4>
            <p style={{ fontSize: "10px", color: "#94a3b8", margin: 0 }}>
              Corner Store • 300m
            </p>
          </div>
          <button
            style={{
              marginTop: "12px",
              backgroundColor: "#334155",
              color: "#fff",
              border: "none",
              padding: "6px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            50 CC
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <h3
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#94a3b8",
          marginBottom: "12px",
        }}
      >
        Activity Ledger
      </h3>
      <div
        style={{
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "12px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              padding: "8px",
              borderRadius: "50%",
              color: "#10b981",
            }}
          >
            <ArrowDownLeft size={16} />
          </div>
          <div>
            <h4
              style={{
                fontSize: "13px",
                margin: "0 0 2px 0",
                color: "#f1f5f9",
              }}
            >
              Helped move heavy box
            </h4>
            <p style={{ fontSize: "10px", color: "#94a3b8", margin: 0 }}>
              Micro-Task • 2 hours ago
            </p>
          </div>
        </div>
        <span
          style={{ fontSize: "13px", fontWeight: "bold", color: "#10b981" }}
        >
          +15 CC
        </span>
      </div>
    </div>
  );
}
