import ModalButtonClose from '../modal/ModalButtonClose';

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
    </div>
  );
};

export default ShopModalContent;
