/* App-komponent som hanterar logik för den aktuella tiden.

-useState används för att lagra den aktuella tiden.
-useEffect uppdaterar currentTime med en 1 sek-intervall, genom att anropa setCurrenTime med nuvarande tid.
-clearInterval ser till att intervallet rensas/försvinner när komponenten avmonterats.

*/

import './App.css';
import { useState, useEffect } from "react";
import Clock from './components/DigitalClock.jsx';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Clock time={currentTime} />
    </div>
  );
}

export default App;

