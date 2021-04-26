import PropTypes from 'prop-types';
import './modal.css';

function ModalButtonOK({ confirmText }) {
  return (
    <div>
      <button className="modalButtonOK" type="button">
        {confirmText}
      </button>
    </div>
  );
}

ModalButtonOK.propTypes = {
  confirmText: PropTypes.string.isRequired,
};

export default ModalButtonOK;
