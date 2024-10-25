import React from 'react';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Hello, Electron with React, TypeScript, and Tailwind CSS!</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Click Me
      </button>
      <div className="p-4 border border-gray-300 rounded shadow">
        <p className="text-lg">This is a test component styled with Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default App;