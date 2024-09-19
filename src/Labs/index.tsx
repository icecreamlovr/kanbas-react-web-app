import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h2>Student: Yue (Claire) He (Sec03)</h2>

      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<h2>Lab3</h2>} />
      </Routes>
    </div>
  );
}
