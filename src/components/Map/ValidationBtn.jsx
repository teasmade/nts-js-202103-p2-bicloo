import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchService from '../../Services/SearchService';
import UserService from '../../Services/UserService';

const ValidationBtn = ({ setPopupDisplayed, setPopupIsOpen }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="validation-btn">
      <button
        type="button"
        onClick={() => {
          setClick(!click);
          if (!SearchService.validateHold && SearchService.startStation)
            SearchService.setValidateHold(SearchService.startStation);
          if (click && SearchService.endStation) {
            SearchService.setValidateDeposit(SearchService.endStation);
            if (UserService.getUser()) {
              UserService.addXp(SearchService.getTotalXp());
              UserService.setValidatedRoute(SearchService.getTotalXp());
              setPopupDisplayed('addXp');
              setPopupIsOpen(true);
            } else {
              setPopupDisplayed('notSigned');
              setPopupIsOpen(true);
            }
          }
        }}
      >
        {!SearchService.validateHold ? 'Valider prise' : 'Valider dépose'}
      </button>
    </div>
  );
};

ValidationBtn.propTypes = {
  setPopupDisplayed: PropTypes.func.isRequired,
  setPopupIsOpen: PropTypes.func.isRequired,
};

export default ValidationBtn;
