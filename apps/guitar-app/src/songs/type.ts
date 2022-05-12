import { InstrumentName } from "soundfont-player";

export type Song = () => { instrument: InstrumentName; chords: string[][] };
