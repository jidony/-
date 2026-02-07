
import React from 'react';
import { FuneralTrack } from '../types';
import { SERVICES, COLORS } from '../constants';

interface ServiceCardProps {
  track: FuneralTrack;
  onSelect: (track: FuneralTrack) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ track, onSelect }) => {
  const service = SERVICES[track];
  const isPremium = track === FuneralTrack.PREMIUM;

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer border-2 ${
        isPremium ? 'border-[#C5A059] bg-white shadow-lg' : 'border-slate-200 bg-white'
      }`}
      onClick={() => onSelect(track)}
    >
      {isPremium && (
        <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-[10px] px-3 py-1 rounded-bl-lg font-bold">
          RECOMMENDED
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="serif text-2xl font-bold mb-1">{service.name}</h3>
        <p className="text-slate-500 text-sm leading-snug">{service.description}</p>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-3xl font-bold text-[#0F172A]">{service.price}</span>
        <span className="text-slate-400 text-sm">정찰제</span>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
            <svg className={`w-5 h-5 ${isPremium ? 'text-[#C5A059]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button 
        className={`w-full py-4 rounded-xl font-bold transition-colors ${
          isPremium 
            ? 'bg-[#0F172A] text-white hover:bg-black' 
            : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
        }`}
      >
        이 서비스 선택하기
      </button>
    </div>
  );
};

export default ServiceCard;
