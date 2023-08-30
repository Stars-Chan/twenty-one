import Section from '../../components/Section';

export default function Sprint(props) {
  const { sprintData, modifyStatus } = props;
  return (
    <div className="sprint-container">
      <h3>冲刺</h3>
      <Section sectionData={sprintData} modifyStatus={modifyStatus} />
    </div>
  );
}
