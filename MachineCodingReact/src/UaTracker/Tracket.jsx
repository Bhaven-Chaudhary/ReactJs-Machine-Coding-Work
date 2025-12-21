import { useEffect, useRef } from "react";

export default function Tracker({ url }) {
  let timer = useRef(null);

  function handleInactiveUser() {
    console.log("user inactive");
    // fetch(url);
  }

  // using useEffect to add tracker
  useEffect(() => {
    function resetInactivityTimer() {
      // clear existing timer
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => handleInactiveUser(), 3000);
    }

    const activityEvents = ["mousemove", "keydown", "scroll", "click"];

    activityEvents.forEach((event) => {
      document.addEventListener(event, resetInactivityTimer);
    });

    // Starting timer initially to begin tracking
    resetInactivityTimer();

    //Cleanup
    return () => {
      // Cleanup listeners
      activityEvents.forEach((event) =>
        document.removeEventListener(event, resetInactivityTimer)
      );
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [url]);

  return <h1>Tracker</h1>;
}
