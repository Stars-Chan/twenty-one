import checkbox from '../../assets/images/checkbox.png';
import checked from '../../assets/images/checked.png';
import arrived from '../../assets/images/arrived.png';

export default function Item(props) {
  const handleCheck = () => {
    const { itemData = {}, modifyStatus } = props;
    const { id, isCheck } = itemData;
    !isCheck && modifyStatus(id);
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
        <img src={imageUrl} className="item-checkbox"></img>
        <div className="item-content">
          <div>{name}</div>
          <div className="item-count">{count}</div>
        </div>
      </button>
    </div>
  );
}
