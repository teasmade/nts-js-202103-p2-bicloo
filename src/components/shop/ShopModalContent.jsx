/* eslint-disable react/prop-types */
const ShopModalContent = ({ allRewards, clickedRewardKey }) => {
  return (
    <div>
      <div>{`${allRewards[clickedRewardKey].description}`}</div>
      <p>Im shop modal content</p>
    </div>
  );
};

export default ShopModalContent;
