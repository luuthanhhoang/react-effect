import React, { useEffect } from 'react';
import { useState } from 'react';

const Clock = () => {
  const [timeString, setTimeString] = useState('');
  const changeTimeString = date => {
    const hour = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const second = `0${date.getSeconds()}`.slice(-2);
    return `${hour}:${minutes}:${second}`;
  }
  useEffect(() => {
    const setTime = setInterval(() => {
      const now = new Date();
      const letTimeString = changeTimeString(now);
      setTimeString(letTimeString);
    }, 1000)
    return () => {
      console.log('Clean up');
      clearInterval(setTime);
    }
  }, []);

  return <p style={{ fontSize: 40, color: 'deeppink' }}>
    {timeString}
  </p>
};

export default Clock;