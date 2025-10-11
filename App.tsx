
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-slate-800 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-2xl text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-green-300">System Online</span>
        </div>
        
        <div className="mb-6">
          <svg className="w-20 h-20 mx-auto text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l1.414-1.414M14.586 14.586L16 16m-2.828-8.486L16 6m-8.486 8.486L6 16" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          React Test Application
        </h1>
        
        <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
          This is a functional demonstration of a React application styled with Tailwind CSS, running in a modern development environment.
        </p>
        
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            Test Passed
          </button>
        </div>
      </div>
      <footer className="absolute bottom-4 text-sm text-slate-500">
        Powered by React & Tailwind CSS
      </footer>
    </main>
  );
};

export default App;
