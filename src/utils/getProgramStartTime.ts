import { DateTime } from 'luxon';

export const getProgramStartTime = (start: number) =>
  DateTime.fromObject({ hour: Math.floor(start / 60), minute: start % 60 }).toFormat('HH:mm');
