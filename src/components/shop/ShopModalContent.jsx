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
  return (
    <div>
      <div className="description">{`${allRewards[clickedRewardKey].description}`}</div>
      <div className="twoButtonWrapper">
        <ModalButtonClose
          confirmText={user ? 'Annuler ma sélection' : 'Fermer'}
          onCancel={onCancel}
        />
        {user ? (
          <ShopModalButtonConfirm
            confirmText="Valider ma sélection"
            onCancel={onCancel}
            clickedRewardKey={clickedRewardKey}
            setAllRewards={setAllRewards}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ShopModalContent;
