import cartoonsAvatar from '../assets/cartoons.jpg';
import cookingAvatar from '../assets/cooking.jpg';
import documentariesAvatar from '../assets/documentaries.jpg';
import moviesAvatar from '../assets/movies.jpg';
import musicAvatar from '../assets/music.jpg';
import newsAvatar from '../assets/news.jpg';
import realityAvatar from '../assets/reality.jpg';
import sportsAvatar from '../assets/sports.jpg';
import talkAvatar from '../assets/talk.jpg';
import travelAvatar from '../assets/travel.jpg';
import { ProgramType } from '../models';

type AvatarCollectionProps = {
  [key in ProgramType]: string;
};

const avatarCollection: AvatarCollectionProps = {
  news: newsAvatar,
  sports: sportsAvatar,
  cooking: cookingAvatar,
  cartoons: cartoonsAvatar,
  movies: moviesAvatar,
  documentaries: documentariesAvatar,
  travel: travelAvatar,
  talk: talkAvatar,
  music: musicAvatar,
  reality: realityAvatar,
};

export const getAvatarImageSrc = (type: ProgramType) => avatarCollection[type];
