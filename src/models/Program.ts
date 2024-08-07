export enum ProgramType {
  News = 'news',
  Sports = 'sports',
  Movies = 'movies',
  Documentaries = 'documentaries',
  Cooking = 'cooking',
  Talk = 'talk',
  Cartoons = 'cartoons',
  Reality = 'reality',
  Music = 'music',
  Travel = 'travel',
}

export type ProgramTypeKeys = keyof typeof ProgramType;

export interface Program {
  id: string;
  name: string;
  description: string;
  type: ProgramType;
  channelId: string;
  length: number; // in minutes
  start: number; //in minutes
}
