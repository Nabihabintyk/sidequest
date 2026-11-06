import React, { useState } from "react";
import Feed from "./Feed";
import WalletScreen from "./Wallet";
import { Home, Wallet } from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        paddingBottom: "70px",
      }}
    >
      {/* Show Feed or Wallet depending on active tab */}
      {activeTab === "feed" ? <Feed /> : <WalletScreen />}

      {/* Bottom Navigation Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1e293b",
          borderTop: "1px solid #334155",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={() => setActiveTab("feed")}
          style={{
            background: "none",
            border: "none",
            color: activeTab === "feed" ? "#38bdf8" : "#94a3b8",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "11px",
            fontWeight: "bold",
            gap: "2px",
          }}
        >
          <Home size={20} />
          Feed
        </button>

        <button
          onClick={() => setActiveTab("wallet")}
          style={{
            background: "none",
            border: "none",
            color: activeTab === "wallet" ? "#38bdf8" : "#94a3b8",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "11px",
            fontWeight: "bold",
            gap: "2px",
          }}
        >
          <Wallet size={20} />
          Wallet
        </button>
      </div>
    </div>
  );
}

export default App;
