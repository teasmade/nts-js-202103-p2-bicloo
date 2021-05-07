import './History.css';

// eslint-disable-next-line react/prop-types
const History = ({ date, xp }) => {
  return (
    <div className="history-line">
      <span className="history-date">{date}</span>
      <span className="history-xp">{xp}XP</span>
    </div>
  );
};

export default History;
