
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-40 bg-[#0F172A] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => navigate('/')}
      >
        <span className="serif text-xl font-bold tracking-tight text-[#C5A059]">온길</span>
        <div className="h-4 w-[1px] bg-slate-600 mx-1"></div>
        <span className="text-xs font-light text-slate-300 uppercase tracking-widest">On-Gil</span>
      </div>
      <button className="p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
