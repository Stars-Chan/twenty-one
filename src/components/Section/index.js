import React from "react";
import Item from "../Item";

class Section extends React.Component {
  render() {
    const { sectionData = [], modifyStatus } = this.props;
    return (
      <div className="section-container">
        {sectionData.map((itemData) => (
          <Item
            itemData={itemData}
            key={itemData.id}
            modifyStatus={modifyStatus}
          />
        ))}
      </div>
    );
  }
}

export default Section;
