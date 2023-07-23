import React from "react";
import Arrive from "../../pages/Arrive";
import Journey from "../../pages/Journey";
import Prepare from "../../pages/Prepare";
import Sprint from "../../pages/Sprint";
import Start from "../../pages/Start";
import star from "../../assets/images/star.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const habitDataStorage = localStorage.getItem("habitData");
    const editStatusStorage = localStorage.getItem("editStatus");
    this.state = {
      habitData: habitDataStorage ? JSON.parse(habitDataStorage) : [],
      editStatus: JSON.parse(editStatusStorage),
    };
  }

  // 在组件挂载后，设置一个监听器来保存 data 到 localStorage
  componentDidMount() {
    window.addEventListener("beforeunload", this.saveDataToLocalStorage);
    const timeUntilNextDay = this.getTimeUntilNextDay();
    this.timer = setTimeout(() => {
      this.resetHabitStatus();
    }, timeUntilNextDay);
  }

  // 在组件卸载前，移除监听器
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveDataToLocalStorage);
    clearTimeout(this.timer);
  }

  // 获取距离明天 0 点的时间间隔（以毫秒为单位）
  getTimeUntilNextDay = () => {
    const currentTimestamp = Date.now();
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    // 下一天的起始时间
    const nextDayTimestamp = date.getTime() + 24 * 60 * 60 * 1000;
    return nextDayTimestamp - currentTimestamp;
  };

  resetHabitStatus = () => {
    const { habitData = [] } = this.state;
    this.setState({
      habitData: habitData.map((item) => {
        if (item.count >= 21) {
          return item;
        }
        if (!item.isCheck && item.count > 0) {
          return { ...item, count: 0 };
        }
        return { ...item, isCheck: false };
      }),
    });
    const timeUntilNextDay = this.getTimeUntilNextDay();
    this.timer = setTimeout(() => {
      this.resetHabitStatus();
    }, timeUntilNextDay);
  };

  // 保存 data 到 localStorage
  saveDataToLocalStorage = () => {
    const { habitData = [], editStatus } = this.state;
    localStorage.setItem("habitData", JSON.stringify(habitData));
    localStorage.setItem("editStatus", JSON.stringify(editStatus || false));
  };

  createHabit = () => {
    const { habitData } = this.state;
    // 使用 prompt() 方法弹出对话框，让用户输入信息
    const userInput = window.prompt("请输入您要养成的习惯：", "");
    // 用户点击确定按钮后，userInput 将保存用户输入的内容
    if (userInput && userInput.trim()) {
      habitData.push({
        name: userInput,
        count: 0,
        isCheck: false,
        id: new Date().getTime(),
      });
      this.setState({ habitData });
    } else if (userInput) {
      alert("您未输入有效文本！");
    }
  };

  editHabit = () => {
    const { editStatus } = this.state;
    console.log("editStatus", editStatus);
    this.setState({ editStatus: !editStatus });
  };

  modifyStatus = (id) => {
    const { habitData = [], editStatus } = this.state;
    const targetData = habitData.find((item) => item.id === id) || {};
    if (editStatus) {
      const isDetele = window.confirm(`您确定删除习惯“${targetData.name}”吗？`);
      if (isDetele) {
        this.setState({
          habitData: habitData.filter((item) => item.id !== id) || [],
        });
      }
    } else {
      if (targetData.count >= 21) return;
      this.setState({
        habitData: habitData.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1, isCheck: true };
          }
          return item;
        }),
      });
    }
  };

  render() {
    const { editStatus, habitData } = this.state;
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
          editHabit={this.editHabit}
          createHabit={this.createHabit}
          modifyStatus={this.modifyStatus}
        />
        <Start startData={startData} modifyStatus={this.modifyStatus} />
        <Journey journeyData={journeyData} modifyStatus={this.modifyStatus} />
        <Sprint sprintData={sprintData} modifyStatus={this.modifyStatus} />
        <Arrive arriveData={arriveData} modifyStatus={this.modifyStatus} />
        {arriveData.map((item) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
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
}

export default Home;
