import { useState, useEffect } from 'react';

function LiveClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Format the day in uppercase (e.g., "SUNDAY")
  const day = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  
  // Break down time into individual components
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className="flex items-center gap-2 text-base font-medium tracking-wide text-white/80 sm:text-lg">
      {/* Day */}
      <span className="font-bold text-[#ffd95a]">{day}</span>

      {/* Clock Display */}
      <span>
        {hours}:{minutes}:
        
        {/* SECONDS DIGITS — Change the color class below to whatever color you want */}
        <span className="text-[#e30808] font-semibold">{seconds}</span>

        <span className="ml-1.5 text-xs text-white/50">{ampm}</span>
      </span>
    </div>
  );
}

export default LiveClock;