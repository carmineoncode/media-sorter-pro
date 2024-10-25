import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const App: React.FC = () => {
  return (
    <div className={twMerge("h-screen flex flex-col items-center justify-center space-y-8 font-sans bg-gray-100")}>
      <h1 className={clsx("text-5xl", "font-bold", "text-blue-600")}>Hello, Electron with React, TypeScript, and Tailwind CSS!</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className={twMerge("p-6 border border-gray-300 rounded shadow bg-white flex-1 min-w-[300px]")}>
          <h2 className="text-2xl font-semibold mb-4">Tailwind CSS Component</h2>
          <p className="text-lg">This is a test component styled with Tailwind CSS.</p>
        </div>
        
        <div className="card w-full md:w-1/2 lg:w-1/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">DaisyUI Card</h2>
            <p>This is a card component from DaisyUI.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Button</button>
            </div>
          </div>
        </div>
      </div>
      
      <button className="btn btn-primary w-80 text-white font-sans font-bold text-lg">Click Me</button>
    </div>
  );
};

export default App;