/* eslint-disable no-nested-ternary */
import ModalButtonClose from '../modal/ModalButtonClose';
import ShopModalButtonConfirm from './ShopModalButtonConfirm';

/* eslint-disable react/prop-types */
const ShopModalContent = ({
  allRewards,
  clickedRewardKey,
  onCancel,
  user,
  setAllRewards,
}) => {
  const shortfall = allRewards[clickedRewardKey].price - user.total_xp_won;
  return (
    <div>
      <div className="description">{`${allRewards[clickedRewardKey].description}`}</div>
      <div className="twoButtonWrapper">
        <ModalButtonClose
          confirmText={
            user && allRewards[clickedRewardKey].buyable
              ? 'Annuler ma sélection'
              : 'Fermer'
          }
          onCancel={onCancel}
        />
        {user && allRewards[clickedRewardKey].buyable ? (
          <ShopModalButtonConfirm
            confirmText="Valider ma sélection"
            onCancel={onCancel}
            clickedRewardKey={clickedRewardKey}
            setAllRewards={setAllRewards}
          />
        ) : user ? (
          <div className="shortfall">{`Il faut gagner ${shortfall} XP de plus - get on your bike!`}</div>
        ) : null}
      </div>
    </div>
  );
};

export default ShopModalContent;
