import React from 'react';
import Section from '@/components/Section';

interface IProps {
  prepareData: any[];
  editStatus: boolean;
  createHabit: Function;
  editHabit: Function;
  manualReset: Function;
  modifyStatus: Function;
}

export default function Prepare(props: IProps) {
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
        <button className="create-button" onClick={() => createHabit()}>
          新增
        </button>
        <button className="edit-button" onClick={() => editHabit()}>
          {editStatus ? '退出' : '编辑'}
        </button>
        <button className="reset-button" onClick={() => manualReset()}>
          重置
        </button>
      </div>
    </div>
  );
}
