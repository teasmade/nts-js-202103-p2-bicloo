/* eslint-disable react/prop-types */
import './Badges.css';
import badgesSvg from './badges.svg';

const Badges = ({ badgeTitle, number }) => {
  return (
    <div className={number % 2 !== 0 ? 'left' : 'right'}>
      <p>{badgeTitle}</p>
      <div className="image-container">
        <img
          className="image-container-img"
          src={badgesSvg}
          title={badgeTitle}
          alt="badges"
        />
        <p className="image-container-text">{badgeTitle}</p>
      </div>
    </div>
  );
};

export default Badges;
