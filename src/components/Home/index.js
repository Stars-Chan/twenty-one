import React, { useEffect, useState } from 'react';
import Arrive from '../../pages/Arrive';
import Journey from '../../pages/Journey';
import Prepare from '../../pages/Prepare';
import Sprint from '../../pages/Sprint';
import Start from '../../pages/Start';
import star from '../../assets/images/star.png';
import { getTimeUntilNextDay } from '../../util/HandleTime';

export default function Home() {
  // 从 localStorage 里面获取数据
  const habitDataStorage = localStorage.getItem('habitData');
  // 初始化 habitData、timeUntilNextDay
  const initHabitData = habitDataStorage ? JSON.parse(habitDataStorage) : [];
  const initTimeUntilNextDay = getTimeUntilNextDay();
  const [habitData, setHabitData] = useState(initHabitData);
  const [timeUntilNextDay, setTimeUntilNextDay] =
    useState(initTimeUntilNextDay);
  const [editStatus, setEditStatus] = useState(false);

  // 每次改动 habitData 都写入到 localStorage
  useEffect(() => {
    window.addEventListener('beforeunload', saveDataToLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', saveDataToLocalStorage);
    };
  }, [habitData]);

  // 确保每天 0 点更新一次状态
  useEffect(() => {
    const timer = setTimeout(() => {
      resetHabitStatus();
    }, timeUntilNextDay);

    return () => {
      clearTimeout(timer);
    };
  }, [timeUntilNextDay]);

  // 更新状态
  const resetHabitStatus = () => {
    const updateHabitData = habitData.map((item) => {
      // 达到 21 天的不再更新
      if (item.count >= 21) {
        return item;
      }
      // 出现断更，即重置为 0 天
      if (!item.isCheck && item.count > 0) {
        return { ...item, count: 0 };
      }
      return { ...item, isCheck: false };
    });
    setHabitData(updateHabitData);
    // 重置更新时间
    const updateTimeUntilNextDay = getTimeUntilNextDay();
    setTimeUntilNextDay(updateTimeUntilNextDay);
  };

  // 保存 data 到 localStorage
  const saveDataToLocalStorage = () => {
    localStorage.setItem('habitData', JSON.stringify(habitData));
  };

  const createHabit = () => {
    // 使用 prompt() 方法弹出对话框，让用户输入信息
    const userInput = window.prompt('请输入您要养成的习惯：', '');
    if (userInput && userInput.trim()) {
      const updateHabitData = habitData.concat({
        name: userInput,
        count: 0,
        isCheck: false,
        id: new Date().getTime(),
      });
      setHabitData(updateHabitData);
    } else if (userInput) {
      alert('您未输入有效文本！');
    }
  };

  const editHabit = () => {
    setEditStatus(!editStatus);
  };

  const modifyStatus = (id) => {
    const targetData = habitData.find((item) => item.id === id) || {};
    if (editStatus) {
      const isDetele = window.confirm(`您确定删除习惯“${targetData.name}”吗？`);
      if (isDetele) {
        const updateHabitData =
          habitData.filter((item) => item.id !== id) || [];
        setHabitData(updateHabitData);
      }
    } else {
      if (targetData.count >= 21) return;
      const updateHabitData = habitData.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1, isCheck: true };
        }
        return item;
      });
      setHabitData(updateHabitData);
    }
  };

  const prepareData = [];
  const startData = [];
  const journeyData = [];
  const sprintData = [];
  const arriveData = [];
  habitData.forEach((item) => {
    const { count = 0 } = item;
    if (count < 1) {
      prepareData.push(item);
    } else if (count < 8) {
      startData.push(item);
    } else if (count < 15) {
      journeyData.push(item);
    } else if (count < 21) {
      sprintData.push(item);
    } else {
      arriveData.push(item);
    }
  });
  return (
    <div className="home-container">
      <Prepare
        prepareData={prepareData}
        editStatus={editStatus}
        editHabit={editHabit}
        createHabit={createHabit}
        modifyStatus={modifyStatus}
      />
      <Start startData={startData} modifyStatus={modifyStatus} />
      <Journey journeyData={journeyData} modifyStatus={modifyStatus} />
      <Sprint sprintData={sprintData} modifyStatus={modifyStatus} />
      <Arrive arriveData={arriveData} modifyStatus={modifyStatus} />
      {arriveData.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            top: `${item.id % 100}%`,
            left: `${item.id % 100}%`,
            transform: `rotate(${item.id % 100}deg)`,
          }}
        >
          <img className="star-image" src={star} alt="" />
        </div>
      ))}
    </div>
  );
}
