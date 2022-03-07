import React, { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(startSeconds);
  const [minutes, setMinutes] = useState(startMiniutes);
  const [hours, setHours] = useState(startHours);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1);
      setMinutes(calcMinutes(seconds));
      setHours(calcHours(seconds));
    }, 1000);
  });
  return <ClockDisplay hours={hours} minutes={minutes} seconds={seconds} />;
}

//One Render
//flushsync for previous workflow
