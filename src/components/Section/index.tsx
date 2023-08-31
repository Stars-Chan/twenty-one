import React from 'react';
import Item from '@/components/Item';

interface IProps {
  sectionData: any[];
  modifyStatus: Function;
}

export default function Section(props: IProps) {
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
