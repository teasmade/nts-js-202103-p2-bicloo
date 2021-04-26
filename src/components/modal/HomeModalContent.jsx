import ModalButtonOK from './ModalButtonOK';

// eslint-disable-next-line react/prop-types
function HomeModalContent({ onCancel }) {
  return (
    <div>
      <h2>Pourquoi utiliser BiclooApp?</h2>
      <ul>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
      </ul>
      <h2>Comment utiliser BiclooApp?</h2>
      <ul>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis hic
        nulla, officia quisquam illum expedita quos neque soluta tenetur sit
        voluptatum reiciendis aliquid recusandae facere eum praesentium dolor,
        voluptas quam?
      </p>
      <ModalButtonOK confirmText="OK, got it" onCancel={onCancel} />
    </div>
  );
}

export default HomeModalContent;
