import Bdrum1 from "./drumMachine/Bdrum1.wav";
import TOM1 from "./drumMachine/TOM1.wav";
import SNARE from "./drumMachine/SNARE1.wav";
import LOWCONGA from "./drumMachine/LOWCONGA.wav";
import HICONGA from "./drumMachine/HICONGA.wav";
import HHCLOSE1 from "./drumMachine/HHCLOSE1.wav";
import COWBELL1 from "./drumMachine/COWBELL1.wav";
import CRASH1 from "./drumMachine/CRASH1.wav";
import HHOPEN2 from "./drumMachine/HHOPEN2.wav";
import { useState } from "react";

function Drum({ pad, volume, setDisplay }) {
  const [active, setActive] = useState(false);

  const playSound = () => {
    const audio = document.getElementById(pad.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 300);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
    setDisplay(pad.soundName);
  };
  return (
    <div className="pad-container">
      <button
        onClick={() => {
          playSound();
        }}
        className={`pad ${active && "pad-active"}`}
        key={pad.keyTrigger}
      >
        {pad.keyCode}
        <audio className="clip" id={pad.keyTrigger} src={pad.sound}></audio>
      </button>
    </div>
  );
}

const DrumPad = () => {
  const drumPad = [
    {
      keyTrigger: 1,
      keyCode: "A",
      sound: Bdrum1,
      soundName: "Bdrum1",
    },
    {
      keyTrigger: 2,
      keyCode: "B",
      sound: SNARE,
      soundName: "SNARE",
    },
    {
      keyTrigger: 3,
      keyCode: "C",
      sound: HHCLOSE1,
      soundName: "HHCLOSE1",
    },
    {
      keyTrigger: 4,
      keyCode: "D",
      sound: TOM1,
      soundName: "TOM1",
    },
    {
      keyTrigger: 5,
      keyCode: "E",
      sound: LOWCONGA,
      soundName: "LOWCONGA",
    },
    {
      keyTrigger: 6,
      keyCode: "D",
      sound: COWBELL1,
      soundName: "COWBELL1",
    },
    {
      keyTrigger: 7,
      keyCode: "E",
      sound: HHOPEN2,
      soundName: "HHOPEN2",
    },
    {
      keyTrigger: 8,
      keyCode: "F",
      sound: CRASH1,
      soundName: "CRASH1",
    },
    {
      keyTrigger: 9,
      keyCode: "Z",
      sound: HICONGA,
      soundName: "HICONGA",
    },
  ];
  const [volume, setVolume] = useState(1);
  const [display, setDisplay] = useState();
  return (
    <div>
      {drumPad.map((pad) => (
        <Drum
          key={pad.keyTrigger}
          pad={pad}
          volume={volume}
          setDisplay={setDisplay}
        />
      ))}

      <h4 className="display">{display}</h4>

      <br />
      <h3>Volume</h3>
      <input
        className="range"
        onChange={(e) => setVolume(e.target.value)}
        type="range"
        step="0.01"
        value={volume}
        max="1"
        min="0"
      />
    </div>
  );
};

export default DrumPad;
