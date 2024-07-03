import React from 'react';

import styles from './Program.module.scss';

import { PROGRAM_LENGTH_MULTIPLIER } from '../../constants/misc';
import { Program as ProgramInterface } from '../../models';
import { getAvatarImageSrc } from '../../utils/getAvatarImage';
import { getProgramStartTime } from '../../utils/getProgramStartTime';

interface ProgramViewProps {
  program: ProgramInterface;
}

const ProgramView: React.FC<ProgramViewProps> = ({ program }) => {
  const { name, description, type, length, start } = program;
  const avatarSrc = getAvatarImageSrc(type);
  const startTime = getProgramStartTime(start);

  return (
    <div className={styles.program} style={{ width: `${length * PROGRAM_LENGTH_MULTIPLIER}px` }}>
      <img src={avatarSrc} alt={`${type} avatar`} className={styles.avatar} />
      <div className={styles.details}>
        <div className={styles.start}>{startTime}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ProgramView;
