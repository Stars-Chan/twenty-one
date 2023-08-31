import React from 'react';
import Section from '@/components/Section';

interface IProps {
  arriveData: any[];
  modifyStatus: Function;
}

export default function Arrive(props: IProps) {
  const { arriveData, modifyStatus } = props;
  return (
    <div className="arrive-container">
      <h3>完成</h3>
      <Section sectionData={arriveData} modifyStatus={modifyStatus} />
    </div>
  );
}
