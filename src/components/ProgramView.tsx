import React from 'react';

import styles from './Program.module.scss';

import { Program as ProgramInterface } from '../models';
import { getAvatarImageSrc } from '../utils/getAvatarImage';

const PROGRAM_LENGTH_MULTIPLIER = 5;

interface ProgramViewProps {
  program: ProgramInterface;
}

const ProgramView: React.FC<ProgramViewProps> = ({ program }) => {
  const { name, description, type, length } = program;
  const avatarSrc = getAvatarImageSrc(type);

  return (
    <div className={styles.program} style={{ width: `${length * PROGRAM_LENGTH_MULTIPLIER}px` }}>
      <img src={avatarSrc} alt={`${type} avatar`} className={styles.avatar} />
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ProgramView;
