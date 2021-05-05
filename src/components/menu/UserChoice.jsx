import { Link } from 'react-router-dom';
import UserService from '../../Services/UserService';
import './UserChoice.css';

export default function userChoice({ isUserChoiceExpended, toRef }) {
  const isUserLogged = UserService.getUser();

  return (
    <div
      ref={toRef}
      className={`UserChoice ${
        isUserChoiceExpended ? 'showChoice' : 'noShowChoice'
      }`}
    >
      <Link to={isUserLogged ? '/log' : '/log'}>
        {`${isUserLogged ? 'Se déconnecter' : "S'inscrire"}`}
      </Link>
      <div className="separator" />
      <Link to={isUserLogged ? '/profile' : '/log'}>
        {`${isUserLogged ? 'Mon profil' : 'Se connecter'}`}
      </Link>
    </div>
  );
}
