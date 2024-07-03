import { PROGRAM_LENGTH_MULTIPLIER } from '../constants/misc';
import { Channel } from '../models';

export const getChannelLength = (channel: Channel) => {
  const lastProgram = channel.programs[channel.programs.length - 1];
  return (lastProgram.start + lastProgram.length) * PROGRAM_LENGTH_MULTIPLIER;
};
