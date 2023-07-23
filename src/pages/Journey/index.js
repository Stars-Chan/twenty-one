import React from "react";
import Section from "../../components/Section";

class Journey extends React.Component {
  render() {
    const { journeyData, modifyStatus } = this.props;
    return (
      <div className="journey-container">
        <h3>坚持</h3>
        <Section sectionData={journeyData} modifyStatus={modifyStatus} />
      </div>
    );
  }
}

export default Journey;
