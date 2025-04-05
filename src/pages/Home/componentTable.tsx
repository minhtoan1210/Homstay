import React, { useState } from "react";

const timeSlots = [
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
  "20:00 - 22:00",
];

const days = [
  "30-03-2025 (CN)",
  "31-03-2025 (T2)",
  "01-04-2025 (T3)",
  "02-04-2025 (T4)",
  "03-04-2025 (T5)",
  "04-04-2025 (T6)",
  "05-04-2025 (T7)",
];
export default function ComponentTable() {
  const [scheduleData, setScheduleData] = useState(() => {
    const initialData = {};
    days.forEach((day) => {
      initialData[day] = {};
      timeSlots.forEach((slot) => {
        initialData[day][slot] = "";
      });
    });
    return initialData;
  });

  const handleChange = (day, slot, value) => {
    setScheduleData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [slot]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu:", scheduleData);
    // Gửi dữ liệu lên server hoặc xử lý tiếp...
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Ngày / Giờ
              </th>
              {timeSlots.map((slot) => (
                <th
                  key={slot}
                  style={{ border: "1px solid #ccc", padding: "8px" }}
                >
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {day}
                </td>
                {timeSlots.map((slot) => (
                  <td
                    key={slot}
                    style={{ border: "1px solid #ccc", padding: "8px" }}
                  >
                    <input
                      type="checkbox"
                      value={scheduleData[day][slot]}
                      onChange={(e) => handleChange(day, slot, e.target.value)}
                      style={{ width: "100%" }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "16px" }}>
          <button type="submit">Lưu lịch</button>
        </div>
      </form>
    </>
  );
}
