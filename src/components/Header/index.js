import { useEffect, useState } from 'react';
import { formattedTime } from '../../util/HandleTime';

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="header-container">
      <h1>养成一个新习惯只需要 21 天</h1>
      <span className="header-time">{formattedTime(time)}</span>
    </div>
  );
}
