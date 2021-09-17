import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>My count is {count}</h1>
      <button onClick={() => setCount(count - 1)}>Lets Count</button>
    </div>
  );
}
