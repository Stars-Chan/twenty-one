import React from "react";
import checkbox from "../../assets/images/checkbox.png";
import checked from "../../assets/images/checked.png";
import arrived from "../../assets/images/arrived.png";

class Item extends React.Component {
  handleCheck = () => {
    const { itemData = {}, modifyStatus } = this.props;
    const { id, isCheck } = itemData;
    !isCheck && modifyStatus(id);
  };
  render() {
    const { itemData = {} } = this.props;
    const { name, count, isCheck } = itemData;
    let imageUrl = checkbox;
    if (count >= 21) {
      imageUrl = arrived;
    } else if (isCheck) {
      imageUrl = checked;
    }
    return (
      <div className="item-container">
        <button onClick={this.handleCheck} className="item-button">
          <img src={imageUrl} className="item-checkbox"></img>
          <div className="item-content">
            <div>{name}</div>
            <div className="item-count">{count}</div>
          </div>
        </button>
      </div>
    );
  }
}

export default Item;
