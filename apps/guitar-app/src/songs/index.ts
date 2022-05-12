import { BlitzKriegBop } from "./BlitzKriegBop";
import { MyHero } from "./MyHero";
import { Someday } from "./Someday";
import { Song } from "./type";

export const SONGS: Song[] = [BlitzKriegBop, Someday, MyHero];

export function getRandomSong(): Song {
  const index = Math.floor(Math.random() * SONGS.length);
  return SONGS[index];
}

export function getSong(number: number): Song {
  return SONGS[number];
}
