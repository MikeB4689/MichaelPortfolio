import React, { useState } from "react";

function generateCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null); // Empty slots before start
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const days = generateCalendarDays(year, month);

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div
      style={{
        textAlign: "center",

        padding: "20px",
        width: "400px",
        background: "#0f172a",
        borderRadius: "12px",
        color: "#f1f5f9",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={handlePrevMonth}
          style={{
            background: "none",
            border: "1px solid #334155",
            color: "#f1f5f9",
            padding: "6px 10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ⬅
        </button>
        <h2 style={{ margin: 0 }}>
          {monthName} {year}
        </h2>
        <button
          onClick={handleNextMonth}
          style={{
            background: "none",
            border: "1px solid #334155",
            color: "#f1f5f9",
            padding: "6px 10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ➡
        </button>
      </div>

      {/* Days of week */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "6px",
          fontWeight: "bold",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "6px",
          marginTop: "10px",
        }}
      >
        {days.map((day, index) => {
          const isToday =
            day &&
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year;

          return (
            <div
              key={index}
              style={{
                height: "40px",
                borderRadius: "8px",
                background: day
                  ? isToday
                    ? "#38bdf8"
                    : "#1e293b"
                  : "transparent",
                color: isToday ? "#0f172a" : "#f1f5f9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: day ? "pointer" : "default",
                transition: "0.2s",
              }}
              onClick={() =>
                day && alert(`Selected: ${monthName} ${day}, ${year}`)
              }
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
