import PropTypes from 'prop-types';
import './modal.css';
import UserService from '../../Services/UserService';

// eslint-disable-next-line react/prop-types
function ModalButtonConfirm({ confirmText, onCancel, clickedRewardKey }) {
  const clickHandler = () => {
    onCancel();
    UserService.addRewardBought(clickedRewardKey);
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
