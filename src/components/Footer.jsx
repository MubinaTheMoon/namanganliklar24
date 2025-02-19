import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer-logo">
          <h2>NAMANGANLIKLAR 24</h2>
        </div>
        <div className="info">
          <p className="site-info">
            Воспроизводство, копирование, использование информации с сайта
            «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного
            разрешения редакции.
          </p>
          <div className="extra-info">
            <ul className="list">
              <li>Информация о сайте</li>
              <li>Напишите нам</li>
              <li>Реклама</li>
              <li>Прислать новость</li>
            </ul>
            <ul className="list">
              <li>Использование материалов</li>
              <li>Темы дня</li>
              <li>Наша команда</li>
            </ul>
          </div>
        </div>
        <div className="social">
          <b>Наши социальные сети</b>
          <div className="icons">
            <img src="../facebook.svg" alt="" />
            <img src="../instagram.svg" alt="" />
            <img src="../telegram.svg" alt="" />
            <img src="../youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
