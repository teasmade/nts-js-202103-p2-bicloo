/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './modal.css';
import UserService from '../../Services/UserService';

// eslint-disable-next-line react/prop-types
function ModalButtonConfirm({
  confirmText,
  onCancel,
  clickedRewardKey,
  setAllRewards,
}) {
  const clickHandler = () => {
    onCancel();
    UserService.addRewardBought(clickedRewardKey);
    UserService.getUserRewards().then((data) => {
      setAllRewards(data);
    });
  };

  return (
    <div>
      <button
        onClick={clickHandler}
        className="modalButtonConfirm"
        type="button"
      >
        {confirmText}
      </button>
    </div>
  );
}

ModalButtonConfirm.propTypes = {
  confirmText: PropTypes.string.isRequired,
};

export default ModalButtonConfirm;
