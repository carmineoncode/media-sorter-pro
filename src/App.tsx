import React from 'react';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4 font-sans">
      <h1 className="text-4xl font-bold">Hello, Electron with React, TypeScript, and Tailwind CSS!</h1>
      <button className="btn btn-primary">Click Me</button>
      <div className="p-4 border border-gray-300 rounded shadow">
        <p className="text-lg">This is a test component styled with Tailwind CSS.</p>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">DaisyUI Card</h2>
          <p>This is a card component from DaisyUI.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;