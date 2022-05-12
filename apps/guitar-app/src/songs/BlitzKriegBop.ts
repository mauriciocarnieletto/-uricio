import { A5, D5, E5 } from "./chords";
import { Song } from "./type";

export const BlitzKriegBop: Song = () => {
  const VERSE_CHORUS_AND_EVERYTHING_ELSE = [A5, A5, D5, E5];
  const OUTRO = [A5, D5, A5];

  return {
    instrument: "distortion_guitar",
    chords: [
      ...VERSE_CHORUS_AND_EVERYTHING_ELSE,
      ...VERSE_CHORUS_AND_EVERYTHING_ELSE,
      ...VERSE_CHORUS_AND_EVERYTHING_ELSE,
      ...OUTRO,
    ],
  };
};
