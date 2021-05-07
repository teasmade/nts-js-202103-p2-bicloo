import './History.css';

// eslint-disable-next-line react/prop-types
const History = ({ date, xp }) => {
  const formatedDate = new Date(date);
  return (
    <div className="history-line">
      <span className="history-date">{`${formatedDate.getDay()}/${formatedDate.getMonth()}/${formatedDate.getFullYear()}`}</span>
      <span className="history-xp">{xp} XP</span>
    </div>
  );
};

export default History;
