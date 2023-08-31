import React from 'react';
import Section from '@/components/Section';

interface IProps {
  startData: any[];
  modifyStatus: Function;
}

export default function Start(props: IProps) {
  const { startData, modifyStatus } = props;
  return (
    <div className="start-container">
      <h3>启航</h3>
      <Section sectionData={startData} modifyStatus={modifyStatus} />
    </div>
  );
}
