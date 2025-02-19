function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-container container">
          <h2 className="interest">Напишите нам</h2>
          <div className="add-info">
            <div className="main-info">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Номер телефона" />
              <input
                className="email"
                type="email"
                placeholder="Электронная почта"
              />
              <textarea name="" id="" cols="30" rows="8"></textarea>
            </div>
            <div className="their-info">
              <div className="their-inner-info">
                <h3>Электронная почта</h3>
                <a href="info@namanganliklar24.uz">info@namanganliklar24.uz</a>
                <div className="info-divider"></div>
              </div>
              <div className="their-inner-info">
                <h3>Номер телефона</h3>
                <a>+998 88 522-54-76</a>
                <div className="info-divider"></div>
              </div>
              <div className="their-inner-info">
                <h3>Адрес</h3>
                <a>Ташкент, площадь Мустакиллик, 6 </a>
              </div>
            </div>
          </div>
          <div className="button">Отправить</div>
        </div>
      </div>
    </>
  );
}

export default Contact;
