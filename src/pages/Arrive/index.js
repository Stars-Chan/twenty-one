import React from "react";
import Section from "../../components/Section";

class Arrive extends React.Component {
  render() {
    const { arriveData, modifyStatus } = this.props;
    return (
      <div className="arrive-container">
        <h3>完成</h3>
        <Section sectionData={arriveData} modifyStatus={modifyStatus} />
      </div>
    );
  }
}

export default Arrive;
