/* eslint-disable react/no-unescaped-entities */
import ModalButtonClose from '../modal/ModalButtonClose';
// eslint-disable-next-line react/prop-types
function HomeModalContent({ onCancel }) {
  return (
    <div>
      <h2>Pourquoi utiliser BiclooApp?</h2>
      <ul>
        <li>1-Déplacez-vous avec fun!</li>
        <li>2-Gagnez de l'expérience</li>
        <li>3-Débloquez des récompenses!</li>
      </ul>
      <h2>Comment utiliser BiclooApp?</h2>
      <ul>
        <li>1-Accumulez de l'XP selon vos stations de départ et d'arrivée</li>
        <li>2-Rendez-vous sur le shop</li>
        <li>3-Dépensez-y votre XP! </li>
      </ul>
      <p>
        Et si utiliser le réseau Bicloo vous faisait gagner des récompenses?
        BiclooApp est LA nouvelle manière de se déplacer à vélo à Nantes.
        L'application propose une approche ludique qui vous fera passer des
        heures sur un Bicloo! Alors, qu'attendez-vous pour vous inscrire?
      </p>

      <ModalButtonClose confirmText="OK, j'ai compris" onCancel={onCancel} />
    </div>
  );
}

export default HomeModalContent;
