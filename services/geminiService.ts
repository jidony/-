
import { GoogleGenAI, Type } from "@google/genai";

export const generateMemorialBio = async (name: string, keywords: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `고 ${name}님의 생애를 기리는 아름답고 품격 있는 추모사를 작성해주세요. 키워드: ${keywords}. 한국어 경어체로 작성하며, 가족들에게 위로가 되는 따뜻한 어조를 사용해주세요.`,
      config: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return response.text || "생애 기록을 생성하지 못했습니다. 직접 작성하시거나 다시 시도해주세요.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "서비스 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.";
  }
};
