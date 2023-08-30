// 计算距离明天 0 点的时间间隔（以毫秒为单位）
export const getTimeUntilNextDay = () => {
  const currentTimestamp = Date.now();
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  // 下一天的起始时间
  const nextDayTimestamp = date.getTime() + 24 * 60 * 60 * 1000;
  return nextDayTimestamp - currentTimestamp;
};

// 时间格式化
export const formattedTime = (currentTime) => {
  const years = currentTime.getFullYear();
  const months = String(currentTime.getMonth() + 1).padStart(2, '0');
  const days = String(currentTime.getDate()).padStart(2, '0');
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  return `${years}-${months}-${days} ${hours}:${minutes}:${seconds}`;
};
