
export enum FuneralTrack {
  DIRECT = 'DIRECT',
  PREMIUM = 'PREMIUM'
}

export interface Butler {
  id: string;
  name: string;
  rating: number;
  years: number;
  area: string;
  avatar: string;
  reviews: number;
}

export enum FuneralStage {
  DISPATCH = '출동',
  TRANSPORT = '이송',
  FAREWELL = '발인/영결식',
  CREMATION = '화장',
  PLACEMENT = '안치'
}

export interface FuneralStatus {
  stage: FuneralStage;
  timestamp: string;
  location?: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface MemorialMessage {
  id: string;
  sender: string;
  content: string;
  date: string;
}
