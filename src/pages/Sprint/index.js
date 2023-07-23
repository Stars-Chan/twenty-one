import React from "react";
import Section from "../../components/Section";

class Sprint extends React.Component {
  render() {
    const { sprintData, modifyStatus } = this.props;
    return (
      <div className="sprint-container">
        <h3>冲刺</h3>
        <Section sectionData={sprintData} modifyStatus={modifyStatus} />
      </div>
    );
  }
}

export default Sprint;
