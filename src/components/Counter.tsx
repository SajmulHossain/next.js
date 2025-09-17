"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white/20 shadow-xl rounded-lg p-6 w-full max-w-sm text-center">
          <p className="text-4xl font-bold mb-4" id="count-display">
            {count}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;