import React, { useState } from "react";
import {
  PlusCircle,
  MapPin,
  Clock,
  Zap,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function Feed() {
  // Sample initial micro-tasks feed
  const [tasks, setTasks] = useState([
    {
      id: 1,
      user: "Aisha",
      task: "Need help restarting my electrical breaker box (5 mins)",
      ring: "Building 4B",
      credits: 10,
      time: "10 mins ago",
      status: "open",
    },
    {
      id: 2,
      user: "Rahul",
      task: "Can anyone lend a step ladder for 10 minutes?",
      ring: "Block A (200m away)",
      credits: 15,
      time: "25 mins ago",
      status: "open",
    },
    {
      id: 3,
      user: "Priya",
      task: "Hold package delivery at front gate while I'm on a work call",
      ring: "Building 4B",
      credits: 10,
      time: "1 hour ago",
      status: "completed",
    },
  ]);

  // State for the new task form
  const [newTaskText, setNewTaskText] = useState("");
  const [newCredits, setNewCredits] = useState(10);

  // Function when user clicks "Post SideQuest"
  const handlePostTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      user: "You (Nabiha)",
      task: newTaskText,
      ring: "Building 4B",
      credits: Number(newCredits),
      time: "Just now",
      status: "open",
    };

    setTasks([newTask, ...tasks]);
    setNewTaskText("");
  };

  // Function when a helper clicks "Accept Quest"
  const handleAcceptTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, status: "accepted" } : t)),
    );
  };

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
      {/* Top Banner */}
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
              fontSize: "22px",
              fontWeight: "bold",
              color: "#38bdf8",
              margin: 0,
            }}
          >
            SideQuest
          </h1>
          <p
            style={{ fontSize: "12px", color: "#94a3b8", margin: "4px 0 0 0" }}
          >
            Hyper-Local Neighborhood Feed
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
          <ShieldCheck size={14} /> Walled Ring
        </span>
      </div>

      {/* Post a New Micro-Task Card */}
      <form
        onSubmit={handlePostTask}
        style={{
          backgroundColor: "#1e293b",
          padding: "14px",
          borderRadius: "12px",
          marginBottom: "20px",
          border: "1px solid #334155",
        }}
      >
        <h3
          style={{ fontSize: "14px", margin: "0 0 10px 0", color: "#e2e8f0" }}
        >
          Post a 5-Minute Micro-Task
        </h3>
        <input
          type="text"
          placeholder="e.g. Can someone grab my mail or lend a screwdriver?"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #475569",
            backgroundColor: "#0f172a",
            color: "#fff",
            fontSize: "13px",
            boxSizing: "border-box",
            marginBottom: "10px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>Reward:</span>
            <input
              type="number"
              value={newCredits}
              onChange={(e) => setNewCredits(e.target.value)}
              style={{
                width: "50px",
                padding: "4px",
                borderRadius: "6px",
                border: "1px solid #475569",
                backgroundColor: "#0f172a",
                color: "#fbbf24",
                fontSize: "13px",
                textAlign: "center",
              }}
            />
            <span
              style={{ fontSize: "12px", color: "#fbbf24", fontWeight: "bold" }}
            >
              CC
            </span>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#0284c7",
              color: "#fff",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <PlusCircle size={15} /> Post Quest
          </button>
        </div>
      </form>

      {/* Micro-Task List */}
      <h3
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#94a3b8",
          marginBottom: "12px",
        }}
      >
        Nearby Requests
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {tasks.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "12px",
              padding: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#f1f5f9",
                  }}
                >
                  {t.user}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "11px",
                    color: "#94a3b8",
                    marginTop: "2px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <MapPin size={12} /> {t.ring}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <Clock size={12} /> {t.time}
                  </span>
                </div>
              </div>
              <span
                style={{
                  backgroundColor: "#451a03",
                  color: "#fbbf24",
                  border: "1px solid #78350f",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <Zap size={13} /> +{t.credits} CC
              </span>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "#cbd5e1",
                margin: "8px 0 12px 0",
                lineHeight: "1.4",
              }}
            >
              {t.task}
            </p>

            {/* Action Buttons */}
            {t.status === "open" && (
              <button
                onClick={() => handleAcceptTask(t.id)}
                style={{
                  width: "100%",
                  backgroundColor: "#10b981",
                  color: "#fff",
                  border: "none",
                  padding: "8px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Accept Quest (Earn {t.credits} CC)
              </button>
            )}

            {t.status === "accepted" && (
              <div
                style={{
                  backgroundColor: "#064e3b",
                  color: "#6ee7b7",
                  padding: "8px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Quest Accepted! Connect in hallway/semi-public area.
              </div>
            )}

            {t.status === "completed" && (
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <CheckCircle2 size={14} color="#64748b" /> Completed & Rewarded
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
