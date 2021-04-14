/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Hamburger from 'hamburger-react';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuTitle, setMenuTitle] = useState('Home');

  const handleMenuClick = (itemTitle) => {
    if (itemTitle) {
      setMenuTitle(itemTitle);
    }
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { title: 'Home', link: '/', key: 1 },
    { title: 'Login', link: '/login', key: 2 },
    { title: 'Map', link: '/map', key: 3 },
    { title: 'Profile', link: '/profile', key: 4 },
    { title: 'Shop', link: '/shop', key: 5 },
  ];
  return (
    <div>
      <header>
        <Hamburger toggle={() => handleMenuClick(false)} toggled={showMenu} />
        <h1>{menuTitle}</h1>
      </header>
      <div id="movingMenu" className={showMenu ? 'show' : 'noShow'}>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  onClick={() => handleMenuClick(item.title)}
                  to={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
