import { useEffect, useState } from "react";

export function useLocalTime(): string {
  const [time, setTime] = useState(() => format());

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return time;
}

function format(): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}
