import React from "react";
import Section from "../../components/Section";

class Start extends React.Component {
  render() {
    const { startData, modifyStatus } = this.props;
    return (
      <div className="start-container">
        <h3>启航</h3>
        <Section sectionData={startData} modifyStatus={modifyStatus} />
      </div>
    );
  }
}

export default Start;
