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
  const shortfall = user
    ? allRewards[clickedRewardKey].price - user.current_xp
    : null;
  const newBalance = user
    ? user.current_xp - allRewards[clickedRewardKey].price
    : null;
  return (
    <div className="shopContent">
      <div className="description">{`${allRewards[clickedRewardKey].description}`}</div>

      {user && allRewards[clickedRewardKey].buyable ? (
        <>
          <div className="balance">{`A ce moment, vous disposez de ${user.current_xp} XP`}</div>
          <div className="cost">{`Cette récompense coûte ${allRewards[clickedRewardKey].price} XP; vous auriez ${newBalance} XP restants après validation`}</div>
        </>
      ) : null}

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
            allRewards={allRewards}
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
