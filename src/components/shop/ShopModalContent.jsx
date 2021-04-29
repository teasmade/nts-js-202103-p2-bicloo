import ModalButtonClose from '../modal/ModalButtonClose';
import ModalButtonConfirm from '../modal/ModalButtonConfirm';

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
      <ModalButtonClose
        confirmText={user ? 'Annuler ma sélection' : 'Fermer'}
        onCancel={onCancel}
      />
      {user ? (
        <ModalButtonConfirm
          confirmText="Confirmer ma sélection"
          onCancel={onCancel}
          clickedRewardKey={clickedRewardKey}
          setAllRewards={setAllRewards}
        />
      ) : null}
    </div>
  );
};

export default ShopModalContent;
