import Section from '../../components/Section';

export default function Arrive(props) {
  const { arriveData, modifyStatus } = props;
  return (
    <div className="arrive-container">
      <h3>完成</h3>
      <Section sectionData={arriveData} modifyStatus={modifyStatus} />
    </div>
  );
}
