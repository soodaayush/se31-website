// src/components/Countdown.tsx
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  if (!isClient) {
    return <span className="text-gray-500">Loading countdown...</span>;
  }

  Object.keys(timeLeft).forEach((interval) => {
    // @ts-ignore
    if (timeLeft[interval] > 0 || interval === "seconds") { // Display seconds even if 0 if there are other units left
      // @ts-ignore
      timerComponents.push(
        <span key={interval} className="mr-1">
          {/* @ts-ignore */}
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
      {timerComponents.length ? timerComponents : <span className="text-gray-500">Deadline passed</span>}
    </div>
  );
};

export default Countdown;
