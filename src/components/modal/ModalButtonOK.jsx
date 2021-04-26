import PropTypes from 'prop-types';
import './modal.css';

// eslint-disable-next-line react/prop-types
function ModalButtonOK({ confirmText, onCancel }) {
  return (
    <div>
      <button onClick={onCancel} className="modalButtonOK" type="button">
        {confirmText}
      </button>
    </div>
  );
}

ModalButtonOK.propTypes = {
  confirmText: PropTypes.string.isRequired,
};

export default ModalButtonOK;
