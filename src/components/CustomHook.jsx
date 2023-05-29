import React, { useState } from "react";

function useOnOrOff() {
  const [state, setState] = useState("off");
  const eventHandlers = () => {
    return {
      on: () => {
        console.log("turning power on");
        setState("on");
      },
      off: () => {
        console.log("turning power off");
        setState("off");
      },
      toggle: () => {
        console.log("toggling power");
        if (state === "on") {
          setState("off");
          return;
        }
        setState("on");
      },
    };
  };

  return [state, eventHandlers()];
}

export function CustomHook() {
  const [power, { on, off, toggle }] = useOnOrOff();

  console.log(power);
  console.log(on);
  console.log(off);
  console.log(toggle);
  return (
    <div>
      CustomHook
      <p>Power is {power}</p>
      <button onClick={on}>Turn on power</button>
      <button onClick={off}>Turn off power</button>
      <button onClick={toggle}>Toggle power</button>
    </div>
  );
}
