"use client"
import React, { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleClickButton} className='bg-blue-500 p-3'>Clique aqui</button>
    </div>
  );
}
