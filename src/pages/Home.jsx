import { useState } from "react";

function Home() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="home">
        <div className="home-container container">
          <img className="banner-img" src="../shopme.png" alt="" />
          <div className="card-wrapper">
            <div className="card">
              <h3>
                Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
                соглашения
              </h3>
              <p>
                Лидер Социал-демократической партии Германии (СДПГ) и кандидат
                на должность...
              </p>
              <img className="card-img" src="../germany-flag.png" alt="" />
              <div className="source">
                <img src="../kv-source.svg" alt="" />
                <span>ИА Красная Весна 15:55</span>
              </div>
            </div>
            <div className="card">
              <h3>
                Ученые доказали экспериментальным путем пользу покровных культур
              </h3>
              <p>
                Новое исследование ученых университета Иллинойса объединяет
                полевые данные...{" "}
              </p>
              <img className="card-img" src="../pshenitsa.png" alt="" />
              <div className="source">
                <img src="../gazeta-ru.svg" alt="" />
                <span>Газета.Ru 12:54</span>
              </div>
            </div>
            <div className="card">
              <h3>
                Baidu запустила публичный сервис роботакси Apollo Go в Шанхае
              </h3>
              <p>
                Автопарк Baidu состоит из модифицированных электромобилей EV...{" "}
              </p>
              <img className="card-img" src="../apollo.png" alt="" />
              <div className="source">
                <img src="../xaytek.svg" alt="" />
                <span>Хайтек+ 13:44</span>
              </div>
            </div>
            <div className="card">
              <h3>
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h3>
              <p>
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <img className="card-img" src="../iphone13.png" alt="" />
              <div className="source">
                <img src="../digger.svg" alt="" />
                <span>Lenta.ru 10:54</span>
              </div>
            </div>
            <div className="card">
              <h3>
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h3>
              <p>
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <img className="card-img" src="../experiment.png" alt="" />
              <div className="source">
                <img src="../lenta-ru.svg" alt="" />
                <span>Тарантас Ньюс 10:44</span>
              </div>
            </div>
            <div className="card">
              <h3>
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </h3>
              <p>
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <img className="card-img" src="../jac.png" alt="" />
              <div className="source">
                <img src="../tarantas.svg" alt="" />
                <span>Digger.ru 14:25</span>
              </div>
            </div>
          </div>
          <div className="news">
            <h3>Хотите быть в курсе свежих новостей? Включите уведомления!</h3>
            <div onClick={() => toggleModal()} className="btn-2 open-modal-btn">
              <p>Включит </p>
            </div>
            {modal && (
              <div className="overlay" onClick={toggleModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <h2>
                    Хотите быть в курсе свежих новостей? Включите уведомления!
                  </h2>
                  <button onClick={toggleModal} className="close-modal-btn">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="world">
            <h3>В мире</h3>
            <div className="news-wrapper">
              <div className="left-side">
                <div className="side-card">
                  <img src="../plane.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Китайский Чунцин запустил чартерный рейс для студентов до
                      Британии
                    </h2>
                    <p>
                      Чартерный рейс с 244 китайскими студентами вылетел из
                      города центрального подчинения Чунцина на юго-западе Китая
                      в британский Манчестер...
                    </p>
                    <div className="source">
                      <img src="../kv-source.svg" alt="" width={210} />
                      <span>ИА Красная Весна 12:25</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../woman.png" alt="" />
                  <div className="next-info">
                    <h2>
                      В Германии выпустят ограниченную партию плюшевых мишек в
                      образе Меркель
                    </h2>
                    <p>
                      БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по
                      производству плюшевых игрушек в городе Кобург (федеральная
                      земля Бавария) изготовила уникального...
                    </p>
                    <div className="source">
                      <img src="../tass.svg" alt="" width={210} />
                      <span>ТАСС 11:35</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../china.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Акции КНР утратили доверие инвесторов. Что делать с
                      бумагами прямо сейчас
                    </h2>
                    <p>
                      За последние месяцы инвесторы в китайский рынок пережили
                      настоящее потрясение — из-за ужесточения регулирования
                      технологического сектора и критики некоторых...
                    </p>
                    <div className="source">
                      <img src="../rbk.svg" alt="" width={210} />
                      <span>РБК Инвестиции 09:35</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../china-flag.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Китай раскритиковал заключенный Австралией, США и
                      Великобританией антикитайский союз AUKUS
                    </h2>
                    <p>
                      Не только Франция, которая лишилась многомиллиардного
                      контракта с Австралий, осталась недовольна созданием
                      трехстороннего оборонного альянса AUKUS, пишет
                      Anna-News.info
                    </p>
                    <div className="source">
                      <img src="../solyonka.svg" alt="" width={210} />
                      <span>Solenka.info 19:43</span>
                    </div>
                  </div>
                </div>
                <div className="btn-3">Показать ещё </div>
              </div>

              <div className="right-side">
                <div className="right-info">
                  <h2>Главное</h2>
                  <div className="inner-info">
                    <h3>
                      В Фергане создадут узбекско-пакистанский университет
                    </h3>
                    <span>Sputnik Узбекистан 14:09</span>
                    <div className="info-divider"></div>
                  </div>
                  <div className="inner-info">
                    <h3>
                      Узбекистан утвердил соглашение о содействии занятости в
                      странах СНГ
                    </h3>
                    <span>ИА Красная Весна 10:19</span>
                    <div className="info-divider"></div>
                  </div>
                  <div className="inner-info">
                    <h3>
                      В Узбекистане увеличиваются очереди за автомобилями UzAuto
                    </h3>
                    <span>Северная газета (Армянск) 13:50</span>
                    <div className="info-divider"></div>
                  </div>
                  <div className="inner-info">
                    <h3>Минтуризма опровергло приостановку выплат за шаги</h3>
                    <span>Sputnik Узбекистан 14:32</span>
                  </div>
                </div>
                <img src="../sentabr.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
