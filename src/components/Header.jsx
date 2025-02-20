import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container container">
          <div className="logo">
            <a href="/">
              <h2 className="site-logo">NAMANGANLIKLAR 24</h2>
            </a>
            <div className="income">
              <p>
                <span>$</span> 10137.2
              </p>
              <p>
                <span>P</span> 138.26
              </p>
            </div>
          </div>
          <div className="search">
            <div className="site-search">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Поиск" />
            </div>
            <div className="lang">
              <p>УЗ</p>
              <p>РУ</p>
            </div>
            <div className="btn">
              <p>Войти</p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-nav">
        <div className="nav-container container">
          <NavLink to={"/"} className={"link"}>
            Главное
          </NavLink>
          <NavLink to={"/list"} className={"link"}>
            Интересное
          </NavLink>
          <NavLink to={"/article"} className={"link"}>
            Экономика
          </NavLink>
          <NavLink to={"/contact"} className={"link"}>
            Контакт
          </NavLink>
          <p>Общество</p>
          <p>Технологии</p>
          <p>Спорт</p>
          <p>Культура</p>
          <p>Происшествия</p>
          <p>Наука</p>
        </div>
        <div className="divider container"></div>
      </div>
    </>
  );
}

export default Header;
