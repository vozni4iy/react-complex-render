import { create } from 'zustand';

import { Channel, Program } from '../models';

interface StoreState {
  channels: Channel[];
  program?: Program;
  setChannels: (channels: Channel[]) => void;
  setProgram: (program: Program) => void;
}

export const useStore = create<StoreState>((set) => ({
  channels: [],
  program: undefined,
  setChannels: (channels: Channel[]) => set({ channels }),
  setProgram: (program: Program) => set({ program }),
}));
