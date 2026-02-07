
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FuneralTrack } from '../types';
import { SERVICES, MOCK_BUTLERS } from '../constants';

interface BookingProps {
  track: FuneralTrack;
  onComplete: () => void;
}

const Booking: React.FC<BookingProps> = ({ track, onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const service = SERVICES[track];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onComplete();
        navigate('/dashboard');
      }, 2000);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
              step >= s ? 'bg-[#0F172A] text-white' : 'bg-slate-200 text-slate-400'
            }`}>
              {s}
            </div>
            <span className={`text-[10px] font-bold ${step >= s ? 'text-slate-900' : 'text-slate-400'}`}>
              {s === 1 ? '장소 선택' : s === 2 ? '부틀러 매칭' : '최종 확인'}
            </span>
          </div>
        ))}
        <div className="absolute top-[100px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h2 className="serif text-2xl font-bold">장례 이송이 필요하신<br />장소를 입력해주세요.</h2>
          <div className="space-y-4">
            <div className="p-5 border-2 border-[#0F172A] rounded-xl bg-white">
              <p className="text-xs font-bold text-[#C5A059] mb-1">현재 위치</p>
              <p className="text-lg font-medium">서울특별시 강남구 테헤란로 123</p>
            </div>
            <button className="w-full p-5 border-2 border-slate-200 border-dashed rounded-xl text-slate-400 font-medium">
              다른 장소 직접 입력하기
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="serif text-2xl font-bold">고객님과 매칭된<br />부틀러를 소개합니다.</h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
            <img src={MOCK_BUTLERS[0].avatar} className="w-20 h-20 rounded-full object-cover border-2 border-[#C5A059]" alt="Butler" />
            <div>
              <p className="text-xl font-bold">{MOCK_BUTLERS[0].name}</p>
              <div className="flex items-center gap-1 text-[#C5A059] font-bold mb-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span>{MOCK_BUTLERS[0].rating}</span>
                <span className="text-slate-300 ml-1 text-sm font-normal">({MOCK_BUTLERS[0].reviews})</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{MOCK_BUTLERS[0].area} • 경력 {MOCK_BUTLERS[0].years}년</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed px-2 italic">
            "가족의 마음으로 정성을 다해 마지막 길을 함께 걷겠습니다. 언제든 편하게 말씀해주세요."
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="serif text-2xl font-bold">마지막으로 내용을<br />확인해주세요.</h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 divide-y divide-slate-100">
            <div className="py-3 flex justify-between">
              <span className="text-slate-400">선택 상품</span>
              <span className="font-bold">{service.name}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400">담당 부틀러</span>
              <span className="font-bold">{MOCK_BUTLERS[0].name}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400">결제 금액</span>
              <span className="text-[#C5A059] font-bold text-xl">{service.price}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 text-center">장례 완료 후 결제가 진행됩니다.</p>
        </div>
      )}

      <div className="mt-12">
        <button 
          onClick={handleNext}
          disabled={loading}
          className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            step === 3 ? '장례 서비스 신청 완료' : '다음 단계로 이동'
          )}
        </button>
      </div>
    </div>
  );
};

export default Booking;
