import { Song } from "./type";

const INTRO_RIFF_1 = [
  [`D#3`, "E4"],
  [`E4`, "E4"],
  [`D#3`, "E4"],
  [`B3`, "E4"],
  [`B3`],
  ["E4"],
  [`B3`],
  ["G#3"],
];

const INTRO_RIFF_2 = [
  [`D#3`, "E4"],
  [`E4`, "E4"],
  [`D#3`, "E4"],
  [`C#4`, "E4"],
  [`B3`, "E4"],
];

export const MyHero: Song = () => {
  return {
    instrument: "electric_guitar_jazz",
    chords: [...INTRO_RIFF_1, ...INTRO_RIFF_2],
  };
};
