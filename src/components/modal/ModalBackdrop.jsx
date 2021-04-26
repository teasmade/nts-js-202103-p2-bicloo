/* eslint-disable react/prop-types */
import './modal.css';

function ModalBackdrop(props) {
  const { onCancel } = props;
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

export default ModalBackdrop;
