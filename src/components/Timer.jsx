import React from "react";

const Timer = time => {
  let hours = Math.floor(time.time / 3600)
    .toString()
    .padStart(2, "0");
  let minutes = Math.floor((time.time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = Math.floor(time.time % 60)
    .toString()
    .padStart(2, "0");
  return (
    <div>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      <div>
        {" "}
        <span>H</span> <span>M</span> <span>S </span>{" "}
      </div>
    </div>
  );
};
export default Timer;
