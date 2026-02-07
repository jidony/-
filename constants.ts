
import { FuneralTrack, FuneralStage, Butler } from './types';

export const COLORS = {
  NAVY: '#0F172A',
  GOLD: '#C5A059',
  CREAM: '#FAF9F6',
  TEXT: '#334155',
};

export const SERVICES = {
  [FuneralTrack.DIRECT]: {
    name: '온길 다이렉트',
    price: '250만원',
    description: '불필요한 절차를 생략한 실속형 장례',
    features: ['장례지도사 1:1 매칭', '표준 수의/관 제공', '전용 리무진 이송', '디지털 부고/추모관'],
    tagline: '효율과 품격을 동시에'
  },
  [FuneralTrack.PREMIUM]: {
    name: '온길 프리미엄',
    price: '450만원',
    description: '메모리얼 버스와 함께하는 고품격 이별',
    features: ['메모리얼 버스(이동형 라운지)', '프리미엄 의전 서비스', 'AI 인생 기록지 제작', '고급 추모 용품'],
    tagline: '가장 깊은 기억을 위해'
  }
};

export const MOCK_BUTLERS: Butler[] = [
  {
    id: '1',
    name: '김온길 부틀러',
    rating: 4.9,
    years: 12,
    area: '서울/경기 북부',
    avatar: 'https://picsum.photos/id/64/200/200',
    reviews: 128
  },
  {
    id: '2',
    name: '이정성 부틀러',
    rating: 5.0,
    years: 8,
    area: '서울/경기 남부',
    avatar: 'https://picsum.photos/id/91/200/200',
    reviews: 84
  }
];

export const INITIAL_STATUS: FuneralStage[] = [
  FuneralStage.DISPATCH,
  FuneralStage.TRANSPORT,
  FuneralStage.FAREWELL,
  FuneralStage.CREMATION,
  FuneralStage.PLACEMENT
];
