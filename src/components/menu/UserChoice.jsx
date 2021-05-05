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
        {`${isUserLogged ? 'Sign out' : 'Sign up'}`}
      </Link>
      <div className="separator" />
      <Link to={isUserLogged ? '/profile' : '/log'}>
        {`${isUserLogged ? 'My profile' : 'Sign In'}`}
      </Link>
    </div>
  );
}
