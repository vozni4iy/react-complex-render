import { useEffect } from 'react';

import './App.scss';
import { getChannels } from './api/queries/getChannels';
import Program from './components/ProgramView';
import { Program as ProgramInterface, ProgramType } from './models';

import { useStore } from './store/store';

const sampleProgram: ProgramInterface = {
  id: '1',
  name: 'Sample Program',
  description: 'This is a sample program description.',
  type: ProgramType.Cartoons,
  channelId: '1',
  length: 60, // in minutes
};

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
    <>
      <div>
        <h1>Vite + React + Zustand</h1>
        <p>Channel descriptions have been logged to the console.</p>
      </div>
      <Program program={sampleProgram} />
    </>
  );
};

export default App;
