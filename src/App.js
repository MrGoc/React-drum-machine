import "./App.css";
import "./drum-machine/drum-machine";
import { DrumDisplay, DrumPad } from "./drum-machine/drum-machine";

function App() {
  return (
    <div id="drum-machine">
      <DrumPad />
      <DrumDisplay />
    </div>
  );
}

export default App;
