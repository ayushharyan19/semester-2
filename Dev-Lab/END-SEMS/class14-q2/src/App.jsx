import { useState } from 'react';

function StudentResultCard({ name, marks }) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const status = average >= 40 ? "Pass" : "Fail";

  return (
    <div>
      <h2>Student Result Card</h2>
      <p>Name: {name}</p>
      <p>Total Marks: {total}</p>
      <p>Average Marks: {average}</p>
      <p>Result Status: {status}</p>
    </div>
  );
}


function App() {
  return (
    <StudentResultCard name="Aryan" marks={[85, 90, 78, 92, 88]} />
  );
}

export default App;