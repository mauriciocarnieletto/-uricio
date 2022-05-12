import { A, A9, Bm7, Bm, D7 } from "./chords";
import { Song } from "./type";

export const Someday: Song = () => {
  const INTRO = [A, A9, Bm7, Bm, D7, Bm, A9, A];

  return {
    instrument: "electric_guitar_jazz",
    chords: [...INTRO, ...INTRO, ...INTRO],
  };
};
