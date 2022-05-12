import { useEffect, useRef, useState } from "react";
import Soundfont from "soundfont-player";
import { getRandomSong } from "./songs";
import "./App.css";

function App() {
  const instrumentRef = useRef<Soundfont.Player>();
  const playingChordRef = useRef<Soundfont.Player[]>();
  const [song, setSong] = useState(getRandomSong());
  const counterRef = useRef(0);
  const { chords, instrument } = song;

  useEffect(() => {
    if (instrument)
      setTimeout(() => {
        Soundfont.instrument(new AudioContext(), instrument).then(
          (instrumentInstance) => {
            instrumentRef.current = instrumentInstance;
          }
        );
      }, 300);
  }, [instrument]);

  const playNoteEvent = () => {
    if (playingChordRef.current) {
      playingChordRef.current.forEach((note) => note.stop(0));
    }

    if (instrumentRef.current) {
      const chord = chords[counterRef.current];

      playingChordRef.current = chord.map((note) =>
        instrumentRef.current!.play(note, 0, {
          gain: 1,
          release: 1,
          sustain: 1,
          duration: 5,
          decay: 1,
          loop: false,
        })
      );

      counterRef.current =
        counterRef.current === chords.length - 1 ? 0 : counterRef.current + 1;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onMouseEnter={playNoteEvent}>Guitarra</button>
      </header>
      <button onClick={() => setSong(getRandomSong())}>Alterar musica</button>
    </div>
  );
}

export default App;
