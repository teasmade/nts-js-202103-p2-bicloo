import './modal.css';

function Modal(props) {
  // eslint-disable-next-line react/prop-types
  const { Content } = props;
  console.log(props);
  return <div className="modal">{Content}</div>;
}

export default Modal;
