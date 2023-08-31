import React from 'react';
import Section from '../../components/Section';

interface IProps {
  sprintData: any[];
  modifyStatus: Function;
}

export default function Sprint(props: IProps) {
  const { sprintData, modifyStatus } = props;
  return (
    <div className="sprint-container">
      <h3>冲刺</h3>
      <Section sectionData={sprintData} modifyStatus={modifyStatus} />
    </div>
  );
}
