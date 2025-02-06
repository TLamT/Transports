import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className='text-center'>
      <h1 className='text-xl'>當前時間:</h1>
      <p className='text-2xl'>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default RealTimeClock;