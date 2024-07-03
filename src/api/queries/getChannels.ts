import { Channel } from '../../models';

export const getChannels = (): Promise<Channel[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const module = await import('../mocks/channels.json');
      resolve(module.default as Channel[]);
    }, 3000);
  });
};
