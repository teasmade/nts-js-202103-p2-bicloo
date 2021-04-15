import React from 'react';
import './Home.css';
import LogSignButtons from '../tools/LogSignButtons';

export default function Home() {
  return (
    <div className="mainSection home">
      <h2 className="logoTitle">
        <span>BiclooApp</span>
      </h2>

      <p>The App which will make you ride ye boïke more, and more !</p>
      <button type="button" className="homeButton">
        Discover <br />
        the concept
      </button>
      <LogSignButtons noLog />
    </div>
  );
}
