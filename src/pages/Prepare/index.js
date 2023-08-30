import Section from '../../components/Section';

export default function Prepare(props) {
  const {
    prepareData,
    editStatus,
    createHabit,
    editHabit,
    manualReset,
    modifyStatus,
  } = props;
  return (
    <div className="prepare-container">
      <h3>准备</h3>
      <Section sectionData={prepareData} modifyStatus={modifyStatus} />
      <div className="prepare-function">
        <button className="create-button" onClick={createHabit}>
          新增
        </button>
        <button className="edit-button" onClick={editHabit}>
          {editStatus ? '退出' : '编辑'}
        </button>
        <button className="reset-button" onClick={manualReset}>
          重置
        </button>
      </div>
    </div>
  );
}
