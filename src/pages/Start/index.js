import Section from '../../components/Section';

export default function Start(props) {
  const { startData, modifyStatus } = props;
  return (
    <div className="start-container">
      <h3>启航</h3>
      <Section sectionData={startData} modifyStatus={modifyStatus} />
    </div>
  );
}
