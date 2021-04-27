import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  const { Content } = props;
  return (
    <div className="modal" style={{ animation: 'fadeIn 0.75s' }}>
      {Content}
    </div>
  );
}

Modal.propTypes = {
  Content: PropTypes.element.isRequired,
};

export default Modal;
