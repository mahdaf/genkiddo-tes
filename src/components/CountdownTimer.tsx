import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <div className="flex justify-center items-center space-x-1 md:space-x-6 py-8">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-8 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.days).split("")[0]}
            </span>
          </div>
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.days).split("")[1]}
            </span>
          </div>
        </div>
        <span className="text-md md:text-xl font-medium font-prompt text-white mt-3">
          Days
        </span>
      </div>

      {/* : (colon) between time sections */}
      <span className="text-2xl md:text-6xl font-bold font-prompt text-white pb-14">
        :
      </span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.hours).split("")[0]}
            </span>
          </div>
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.hours).split("")[1]}
            </span>
          </div>
        </div>
        <span className="text-md md:text-xl font-medium font-prompt text-white mt-3">
          Hours
        </span>
      </div>

      {/* : (colon) between time sections */}
      <span className="text-2xl md:text-6xl font-bold font-prompt text-white pb-14">
        :
      </span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.minutes).split("")[0]}
            </span>
          </div>
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.minutes).split("")[1]}
            </span>
          </div>
        </div>
        <span className="text-md md:text-xl font-medium font-prompt text-white mt-3">
          Minutes
        </span>
      </div>

      {/* : (colon) between time sections */}
      <span className="text-2xl md:text-6xl font-bold font-prompt text-white pb-14">
        :
      </span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.seconds).split("")[0]}
            </span>
          </div>
          <div className="bg-gray-200/30 rounded-lg md:rounded-3xl w-9 h-14 md:w-24 md:h-36 flex items-center justify-center shadow-md">
            <span className="text-2xl md:text-6xl font-bold font-prompt text-white">
              {formatTime(timeLeft.seconds).split("")[1]}
            </span>
          </div>
        </div>
        <span className="text-md md:text-xl font-medium font-prompt text-white mt-3">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
