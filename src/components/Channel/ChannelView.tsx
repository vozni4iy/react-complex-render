import { FC } from 'react';

import styles from './Channel.module.scss';

import { Channel } from '../../models';
import { getChannelLength } from '../../utils/getChannelLength';
import ProgramView from '../Program/ProgramView';

export interface ChannelViewProps {
  channel: Channel;
}

export const ChannelView: FC<ChannelViewProps> = ({ channel }) => (
  <div className={styles.channel} style={{ width: `${getChannelLength(channel)}px` }}>
    {channel.programs.map((program) => (
      <ProgramView key={program.id} program={program} />
    ))}
  </div>
);
