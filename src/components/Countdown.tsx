import { useEffect, useState, type ReactNode } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UNITS: Array<keyof TimeLeft> = ["days", "hours", "minutes", "seconds"];

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
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
    setTimeLeft(calculateTimeLeft());
    const timer = window.setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return <span className="text-gray-500">Loading countdown...</span>;
  }

  const hasTimeRemaining = UNITS.some((unit) => timeLeft[unit] > 0);
  const timerComponents: ReactNode[] = hasTimeRemaining
    ? UNITS.filter((unit) => timeLeft[unit] > 0 || unit === "seconds").map((unit) => (
        <span key={unit} className="mr-1">
          {timeLeft[unit]} {unit}{" "}
        </span>
      ))
    : [];

  return (
    <time dateTime={targetDate} className="text-sm font-medium text-blue-700 dark:text-blue-300">
      {timerComponents.length > 0 ? timerComponents : <span className="text-gray-600 dark:text-gray-400">Deadline passed</span>}
    </time>
  );
};

export default Countdown;
