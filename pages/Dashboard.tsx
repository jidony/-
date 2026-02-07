
import React, { useState, useEffect } from 'react';
import { FuneralStage } from '../types';
import { INITIAL_STATUS, MOCK_BUTLERS } from '../constants';

const Dashboard: React.FC = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(1);
  const stages = INITIAL_STATUS;

  // Mock progression for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStageIdx < 2) setCurrentStageIdx(2);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentStageIdx]);

  return (
    <div className="flex flex-col h-full bg-[#F3F4F6]">
      {/* Active Butler Banner */}
      <div className="bg-[#0F172A] p-6 text-white pb-10">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-[#C5A059] rounded-full text-[10px] font-bold uppercase">Live Tracking</span>
          <span className="text-xs text-slate-400">마지막 업데이트: 방금 전</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
             <img src={MOCK_BUTLERS[0].avatar} className="w-14 h-14 rounded-full border-2 border-white" alt="Butler" />
             <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0F172A]"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg">{MOCK_BUTLERS[0].name} 부틀러</h3>
            <p className="text-xs text-slate-400">현재 고객님을 위해 이동 중입니다.</p>
          </div>
          <button className="ml-auto bg-white/10 p-3 rounded-full">
            <svg className="w-5 h-5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="flex-grow px-6 -mt-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm min-h-[400px]">
          <h2 className="serif text-xl font-bold mb-8">실시간 장례 현황</h2>
          
          <div className="space-y-0 relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-slate-100"></div>
            
            {stages.map((stage, idx) => {
              const isPast = idx < currentStageIdx;
              const isCurrent = idx === currentStageIdx;
              
              return (
                <div key={idx} className="flex gap-6 pb-10 group last:pb-0">
                  <div className={`z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isPast ? 'bg-[#0F172A] border-[#0F172A]' : 
                    isCurrent ? 'bg-white border-[#C5A059]' : 
                    'bg-white border-slate-200'
                  }`}>
                    {isPast ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#C5A059] animate-pulse' : 'bg-slate-200'}`}></div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className={`font-bold transition-colors ${
                        isCurrent ? 'text-slate-900 text-lg' : isPast ? 'text-slate-500' : 'text-slate-300'
                      }`}>
                        {stage}
                      </h4>
                      {isCurrent && <span className="text-[10px] bg-[#C5A059]/10 text-[#C5A059] px-2 py-0.5 rounded-full font-bold">진행 중</span>}
                      {isPast && <span className="text-[10px] text-slate-400 font-medium">오전 10:45</span>}
                    </div>
                    
                    {isCurrent && (
                      <div className="mt-3 p-4 bg-[#FAF9F6] rounded-xl border border-slate-100">
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                          운구 차량이 장례식장에 도착하여<br />
                          고인을 안전하게 이송하고 있습니다.
                        </p>
                        <div className="mt-3 flex gap-2">
                           <button className="flex-grow py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">차량 위치 보기</button>
                           <button className="px-4 py-2 bg-[#0F172A] text-white rounded-lg text-xs font-bold">부틀러 문의</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button for Family */}
        <div className="mt-6 flex gap-4 mb-10">
          <button className="flex-1 bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all">
            <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-bold">일정 공유</span>
          </button>
          <button className="flex-1 bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all">
            <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-bold">조의금 관리</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
