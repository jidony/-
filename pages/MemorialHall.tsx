
import React, { useState } from 'react';
import { generateMemorialBio } from '../services/geminiService';

const MemorialHall: React.FC = () => {
  const [bio, setBio] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', sender: '김철수', content: '삼가 고인의 명복을 빕니다. 따뜻했던 미소 영원히 기억하겠습니다.', date: '방금 전' },
    { id: '2', sender: '이지영', content: '하늘나라에서는 편안히 쉬시길 바랍니다. 좋은 곳으로 가셨을 거예요.', date: '1시간 전' }
  ]);
  const [inputMsg, setInputMsg] = useState("");

  const handleGenerateBio = async () => {
    setLoading(true);
    const result = await generateMemorialBio("이영희", "교직 30년, 꽃을 좋아함, 평생을 헌신함");
    setBio(result);
    setLoading(false);
  };

  const handleSend = () => {
    if (!inputMsg.trim()) return;
    setMessages([{
      id: Date.now().toString(),
      sender: '나',
      content: inputMsg,
      date: '방금 전'
    }, ...messages]);
    setInputMsg("");
  };

  return (
    <div className="pb-10">
      {/* Visual Hero */}
      <div className="h-64 relative bg-[#0F172A] overflow-hidden">
        <img 
          src="https://picsum.photos/id/1018/800/400" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.5]" 
          alt="Memory" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 text-center">
          <p className="text-[#C5A059] text-xs font-bold tracking-[0.2em] mb-2 uppercase">In Loving Memory</p>
          <h1 className="serif text-2xl text-white font-bold">故 이영희 님</h1>
          <p className="text-slate-400 text-xs mt-1">1952. 03. 15 ~ 2025. 05. 20</p>
        </div>
      </div>

      <div className="px-6 py-8">
        {/* AI Bio Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="serif text-xl font-bold">인생 기록지 (AI)</h2>
            <button 
              onClick={handleGenerateBio}
              disabled={loading}
              className="text-xs font-bold text-[#C5A059] flex items-center gap-1"
            >
              {loading ? '기록 생성 중...' : (bio ? '다시 생성하기' : 'AI 추모사 생성')}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[100px]">
            {bio ? (
              <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">{bio}</p>
            ) : (
              <div className="text-center py-4">
                <p className="text-slate-400 text-sm">고인의 소중한 삶의 흔적을<br />AI가 아름다운 문장으로 정리해 드립니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* Guestbook Section */}
        <section>
          <h2 className="serif text-xl font-bold mb-6">마음 나누기</h2>
          
          <div className="mb-6">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="따뜻한 한마디를 남겨주세요"
                className="flex-grow p-4 bg-white rounded-xl border border-slate-200 text-sm outline-none focus:border-[#C5A059]"
              />
              <button 
                onClick={handleSend}
                className="bg-[#0F172A] text-white px-5 rounded-xl font-bold active:scale-95 transition-all"
              >
                전송
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-slate-800">{msg.sender}</span>
                  <span className="text-[10px] text-slate-400">{msg.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer info for donors */}
        <div className="mt-12 p-6 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center">
          <p className="text-sm font-medium text-slate-400 mb-4">비대면으로 조의를 표하고 싶으시다면</p>
          <button className="w-full py-4 bg-[#FEE500] text-[#3C1E1E] rounded-xl font-bold flex items-center justify-center gap-2 mb-3">
             <span className="w-5 h-5 bg-[#3C1E1E] rounded-md text-[8px] flex items-center justify-center text-white">TALK</span>
             카카오페이 송금하기
          </button>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
             <span>신한은행 110-123-456789</span>
             <button className="underline decoration-[#C5A059] decoration-2 underline-offset-2">계좌 복사</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialHall;
