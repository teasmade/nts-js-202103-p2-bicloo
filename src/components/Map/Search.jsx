import { useState } from 'react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={isOpen ? 'form-search-open' : 'form-search-close'}>
        <div className="form-search-lines">
          {' '}
          <button
            className="btn-search"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            icon
          </button>
          <input className="input-search" type="text" placeholder="From :" />
        </div>
        <div className="form-search-lines">
          {' '}
          <button className="btn-search" type="button">
            icon
          </button>
          <input className="input-search" type="text" placeholder="To :" />
        </div>
      </div>
    </>
  );
};

export default Search;
