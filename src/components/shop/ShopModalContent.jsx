import ModalButtonClose from '../modal/ModalButtonClose';
import ModalButtonConfirm from '../modal/ModalButtonConfirm';

/* eslint-disable react/prop-types */
const ShopModalContent = ({ allRewards, clickedRewardKey, onCancel, user }) => {
  return (
    <div>
      <div>{`${allRewards[clickedRewardKey].description}`}</div>
      <p>Im shop modal content</p>
      <ModalButtonClose
        confirmText={user ? 'Annuler ma sélection' : 'Fermer'}
        onCancel={onCancel}
      />
      {user ? (
        <ModalButtonConfirm
          confirmText="Confirmer ma sélection"
          onCancel={onCancel}
          clickedRewardKey={clickedRewardKey}
        />
      ) : null}
    </div>
  );
};

export default ShopModalContent;
