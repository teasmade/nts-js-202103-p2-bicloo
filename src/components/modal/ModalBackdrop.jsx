import PropTypes from 'prop-types';
import './modal.css';

function ModalBackdrop({ onCancel }) {
  return (
    <div
      className="backdrop"
      onClick={onCancel}
      onKeyPress={onCancel}
      role="button"
      tabIndex={0}
      aria-label="click backdrop to close"
    />
  );
}

ModalBackdrop.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default ModalBackdrop;
