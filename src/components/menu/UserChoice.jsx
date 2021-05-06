import { Link } from 'react-router-dom';
import UserService from '../../Services/UserService';
import './UserChoice.css';

export default function userChoice({
  isUserChoiceExpended,
  closeUserChoicePopup,
  toRef,
}) {
  const isUserLogged = UserService.getUser();

  return (
    <div
      ref={toRef}
      className={`UserChoice ${
        isUserChoiceExpended ? 'showChoice' : 'noShowChoice'
      }`}
    >
      <Link
        onClick={() => {
          closeUserChoicePopup();
          UserService.logOut();
        }}
        to={isUserLogged ? '/' : '/signUp'}
      >
        {`${isUserLogged ? 'Sign out' : 'Sign up'}`}
      </Link>
      <div className="separator" />
      <Link
        onClick={closeUserChoicePopup}
        to={isUserLogged ? '/profile' : '/signIn'}
      >
        {`${isUserLogged ? 'My profile' : 'Sign In'}`}
      </Link>
    </div>
  );
}
