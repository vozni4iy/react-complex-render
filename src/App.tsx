import { useEffect } from 'react';

import './App.scss';
import { getChannels } from './api/queries/getChannels';
import { ChannelList } from './components/ChannelList/ChannelList';

import { useStore } from './store/store';

const App = () => {
  const { channels, setChannels } = useStore();

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
    <>
      <h1>React complex render demo</h1>
      {channels.length > 0 && <ChannelList channels={channels} />}
    </>
  );
};

export default App;
