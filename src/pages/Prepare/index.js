import Section from '../../components/Section';

export default function Prepare(props) {
  const { prepareData, editStatus, createHabit, editHabit, modifyStatus } =
    props;
  return (
    <div className="prepare-container">
      <h3>准备</h3>
      <Section sectionData={prepareData} modifyStatus={modifyStatus} />
      <div className="prepare-function">
        <button className="create-button" onClick={createHabit}>
          养成习惯
        </button>
        <button className="edit-button" onClick={editHabit}>
          {editStatus ? '退出删除' : '删除习惯'}
        </button>
      </div>
    </div>
  );
}
