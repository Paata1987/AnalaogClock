import React from 'react';
import AnalogClock from 'analog-clock-react';
const Clock = () => {
  let options = {
    width: '300px',
    border: '3vmin solid #000',
    borderColor: '#2e2e2e',
    baseColor: '#17a2b8',
    centerColor: '#459cff',
    centerBorderColor: '#ffffff',
    handColors: {
      second: '#d81c7a',
      minute: '#ffffff',
      hour: '#ffffff',
    },
  };

  return (
    <div>
      <h2>React Clock - GeeksforGeeks</h2>
      <AnalogClock {...options} />
    </div>
  );
};

export default Clock;
