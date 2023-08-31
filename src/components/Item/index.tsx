import React from 'react';
import checkbox from '@assets/images/checkbox.png';
import checked from '@/assets/images/checked.png';
import arrived from '@assets/images/arrived.png';

interface IProps {
  itemData: any;
  modifyStatus: Function;
}

export default function Item(props: IProps) {
  const handleCheck = () => {
    const { itemData = {}, modifyStatus } = props;
    const { id, isCheck } = itemData;
    if (isCheck) {
      const isPlusOne = window.confirm('您已经完成当天任务，是否继续累加？');
      isPlusOne && modifyStatus(id);
    } else {
      modifyStatus(id);
    }
  };
  const { itemData = {} } = props;
  const { name, count, isCheck } = itemData;
  let imageUrl = checkbox;
  if (count >= 21) {
    imageUrl = arrived;
  } else if (isCheck) {
    imageUrl = checked;
  }
  return (
    <div className="item-container">
      <button onClick={handleCheck} className="item-button">
        <img src={imageUrl} className="item-checkbox" alt="cheked or not" />
        <div className="item-content">
          <div>{name}</div>
          <div className="item-count">{count}</div>
        </div>
      </button>
    </div>
  );
}
