import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  const { Content } = props;
  return <div className="modal">{Content}</div>;
}

Modal.propTypes = {
  Content: PropTypes.element.isRequired,
};

export default Modal;
