
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { FuneralTrack } from '../types';

interface HomeProps {
  onSelectTrack: (track: FuneralTrack) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectTrack }) => {
  const navigate = useNavigate();

  const handleSelect = (track: FuneralTrack) => {
    onSelectTrack(track);
    navigate('/booking');
  };

  return (
    <div className="px-6 py-8">
      <div className="mb-10 text-center">
        <p className="text-[#C5A059] font-medium tracking-widest text-sm mb-2">가장 가벼운 이별, 가장 깊은 기억</p>
        <h1 className="serif text-3xl font-bold text-slate-900 leading-tight">
          온길이 함께하는<br />
          마지막 여정
        </h1>
      </div>

      <div className="space-y-6">
        <ServiceCard 
          track={FuneralTrack.PREMIUM} 
          onSelect={handleSelect} 
        />
        <ServiceCard 
          track={FuneralTrack.DIRECT} 
          onSelect={handleSelect} 
        />
      </div>

      <div className="mt-12 p-6 bg-slate-100 rounded-2xl flex items-center gap-4">
        <div className="bg-[#0F172A] p-3 rounded-full">
          <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">상담이 필요하신가요?</p>
          <p className="text-lg font-bold text-slate-900">24시간 고객센터 연결</p>
        </div>
        <div className="ml-auto">
           <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
