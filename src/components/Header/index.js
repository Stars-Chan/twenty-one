import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    this.setState({
      currentTime: new Date(),
    });
  }
  render() {
    const { currentTime } = this.state;
    const years = currentTime.getFullYear();
    const months = String(currentTime.getMonth() + 1).padStart(2, "0");
    const days = String(currentTime.getDate()).padStart(2, "0");
    const hours = String(currentTime.getHours()).padStart(2, "0");
    const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentTime.getSeconds()).padStart(2, "0");

    const time = `${years}-${months}-${days} ${hours}:${minutes}:${seconds}`;
    return (
      <div className="header-container">
        <h1>养成一个新习惯只需要 21 天</h1>
        <span className="header-time">{time}</span>
      </div>
    );
  }
}

export default Header;
