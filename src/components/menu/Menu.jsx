/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Menu.css';
import homeIcon from '../../assets/img/icon_home.png';
import mapIcon from '../../assets/img/icon_map.png';
import shopIcon from '../../assets/img/icon_shop.png';
import userIcon from '../../assets/img/icon_user.png';
import homeIconSelected from '../../assets/img/icon_home_selected.png';
import mapIconSelected from '../../assets/img/icon_map_selected.png';
import shopIconSelected from '../../assets/img/icon_shop_selected.png';
import userIconSelected from '../../assets/img/icon_user_selected.png';

export default function Menu({ clickOnUser, isUserChoiceExpended }) {
  const menuItems = [
    {
      title: 'Home',
      link: '/',
      isHilighted: true,
      img: homeIcon,
      imgSelected: homeIconSelected,
      key: 0,
    },
    {
      title: 'Map',
      link: '/map',
      isHilighted: false,
      img: mapIcon,
      imgSelected: mapIconSelected,
      key: 1,
    },
    {
      title: 'Shop',
      link: '/shop',
      isHilighted: false,
      img: shopIcon,
      imgSelected: shopIconSelected,
      key: 2,
    },
  ];

  return (
    <div className="menu">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.link}
                onClick={() => {
                  if (isUserChoiceExpended === true) {
                    clickOnUser();
                  }
                  menuItems[item.key].isHilighted = !menuItems[item.key]
                    .isHilighted;
                }}
              >
                <img
                  className="iconButton"
                  src={
                    useLocation().pathname === item.link
                      ? item.imgSelected
                      : item.img
                  }
                  alt="img"
                />
              </Link>
            </li>
          ))}
          <li
            onClick={(e) => {
              e.preventDefault();
              clickOnUser();
            }}
          >
            <img
              id="userIcon"
              className="iconButton"
              src={
                useLocation().pathname === 'profile'
                  ? userIconSelected
                  : userIcon
              }
              alt="img"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

Menu.propTypes = {
  clickOnUser: PropTypes.func.isRequired,
  isUserChoiceExpended: PropTypes.bool.isRequired,
};
