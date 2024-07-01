import { Program } from './Program';

export interface Channel {
  id: string;
  name: string;
  description: string;
  programs: Program[];
}
