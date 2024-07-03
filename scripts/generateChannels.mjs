import fs from 'fs';
import path from 'path';
import { generate } from 'random-words';
import { fileURLToPath } from 'url';

// Enum for program types
const ProgramType = [
  'news',
  'sports',
  'movies',
  'documentaries',
  'cooking',
  'talk',
  'cartoons',
  'reality',
  'music',
  'travel',
];

const programLengths = [60, 120, 180];

// Function to generate random program type
const generateRandomProgramType = () => {
  return ProgramType[Math.floor(Math.random() * ProgramType.length)];
};

// Function to generate programs for a channel
const generateProgramsForChannel = (channelId) => {
  let totalLength = 0;
  let programs = [];
  let i = 0;

  while (totalLength < 1440) {
    let length = programLengths[Math.floor(Math.random() * programLengths.length)];
    programs.push({
      id: `${channelId}-${i}`,
      name: generate({ min: 1, max: 3, join: ' ' }),
      description: generate({ min: 5, max: 10, join: ' ' }),
      type: generateRandomProgramType(),
      channelId: channelId,
      length: length,
      start: totalLength,
    });
    totalLength += length;
    i++;
  }

  return programs;
};

// Function to generate channels
const generateChannels = (numChannels = 5) => {
  let channels = [];
  for (let i = 0; i < numChannels; i++) {
    const channelId = `${i + 1}`;
    const programs = generateProgramsForChannel(channelId);
    channels.push({
      id: channelId,
      name: `Channel ${i + 1}`,
      description: generate({ min: 5, max: 10, join: ' ' }),
      programs: programs,
    });
  }
  return channels;
};

// Get number of channels from command line arguments
const numChannels = process.argv[2] ? parseInt(process.argv[2]) : 5;

// Generate channels
const channels = generateChannels(numChannels);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to save the JSON file
const outputPath = path.join(__dirname, '../src/api/mocks/channels.json');

// Ensure the directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save to JSON file
fs.writeFileSync(outputPath, JSON.stringify(channels, null, 2), 'utf-8');

console.log(`Generated ${numChannels} channels and saved to ${outputPath}`);
