import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-zinc-900 flex justify-center items-center z-[100]">
      <div className="relative flex justify-center items-center">
        <div className="absolute h-24 w-24 rounded-full border-t-2 border-b-2 border-amber-400 animate-spin"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;