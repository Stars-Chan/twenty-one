import React from 'react';
import Section from '@components/Section';

interface IProps {
  journeyData: any[];
  modifyStatus: Function;
}

export default function Journey(props: IProps) {
  const { journeyData, modifyStatus } = props;
  return (
    <div className="journey-container">
      <h3>坚持</h3>
      <Section sectionData={journeyData} modifyStatus={modifyStatus} />
    </div>
  );
}
