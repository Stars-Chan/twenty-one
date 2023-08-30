import Item from "../Item";

export default function Section(props) {
  const { sectionData = [], modifyStatus } = props;
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
