import Section from '../../components/Section';

export default function Journey(props) {
  const { journeyData, modifyStatus } = props;
  return (
    <div className="journey-container">
      <h3>坚持</h3>
      <Section sectionData={journeyData} modifyStatus={modifyStatus} />
    </div>
  );
}
