import PropTypes from 'prop-types';
import './modal.css';

// eslint-disable-next-line react/prop-types
function ModalButtonClose({ confirmText, onCancel }) {
  return (
    <div>
      <button onClick={onCancel} className="modalButtonClose" type="button">
        {confirmText}
      </button>
    </div>
  );
}

ModalButtonClose.propTypes = {
  confirmText: PropTypes.string.isRequired,
};

export default ModalButtonClose;
