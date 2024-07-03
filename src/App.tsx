import { useEffect } from 'react';

import './App.scss';
import { getChannels } from './api/queries/getChannels';

import { useStore } from './store/store';

const App = () => {
  const { setChannels } = useStore();

  useEffect(() => {
    const fetchChannels = async () => {
      const channelsData = await getChannels();
      setChannels(channelsData);
      channelsData.forEach((channel) => {
        console.info(channel.description);
      });
    };

    fetchChannels();
  }, [setChannels]);

  return (
    <div>
      <h1>Vite + React + Zustand</h1>
      <p>Channel descriptions have been logged to the console.</p>
    </div>
  );
};

export default App;
