import { FC } from 'react';

import styles from './ChannelList.module.scss';

import { Channel } from '../../models';
import { ChannelView } from '../Channel/ChannelView';

export interface ChannelListProps {
  channels: Channel[];
}

export const ChannelList: FC<ChannelListProps> = ({ channels }) => (
  <div className={styles.channelList}>
    {channels.map((channel) => (
      <ChannelView key={channel.id} channel={channel} />
    ))}
  </div>
);
