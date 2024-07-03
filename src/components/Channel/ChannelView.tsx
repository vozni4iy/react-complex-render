import { FC } from 'react';

import styles from './Channel.module.scss';

import { Channel } from '../../models';
import ProgramView from '../Program/ProgramView';

export interface ChannelViewProps {
  channel: Channel;
}

export const ChannelView: FC<ChannelViewProps> = ({ channel }) => (
  <div className={styles.channel}>
    {channel.programs.map((program) => (
      <ProgramView key={program.id} program={program} />
    ))}
  </div>
);
