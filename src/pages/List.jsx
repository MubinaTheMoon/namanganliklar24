import React from "react";

function List() {
  return (
    <>
      <div className="list-page">
        <div className="list-container container">
          <img className="banner-img" src="../new-houses.png" alt="" />
          <div className="world">
            <h3>Интересное</h3>
            <div className="news-wrapper">
              <div className="left-side">
                <div className="side-card">
                  <img src="../tashkent.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Отопление Ташкента на 30 лет переходит в управление
                      французской Veolia
                    </h2>
                    <p>
                      Система теплоснабжения Ташкента на 30 лет будет передана в
                      управление французской компании Veolia для модернизации и
                      реконструкции, сообщает 22 сентября пресс-служба...
                    </p>
                    <div className="source">
                      <img src="../kv-source.svg" alt="" width={210} />
                      <span>ИА Красная Весна 12:25</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../apple-company.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Пользователи жалуются на новую проблему iPhone 13,
                      связанную с камерой
                    </h2>
                    <p>
                      Пользователи смартфона Apple iPhone 13 продолжают сообщать
                      о новых проблемах, с которыми они сталкиваются при
                      использовании флагмана, поступившего в продажу только
                      позавчера...
                    </p>
                    <div className="source">
                      <img src="../pepelats.svg" alt="" width={210} />
                      <span>Пепелац Ньюс 07:35</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../halo-infinit.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Halo Infinite сравнили на Xbox One, Xbox One X, Xbox
                      Series S и Xbox Series X
                    </h2>
                    <p>
                      Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на
                      консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series
                      X. Графика впечатляет на всех платформах. Также
                      отмечается...
                    </p>
                    <div className="source">
                      <img src="../klubDns.svg" alt="" width={210} />
                      <span>Клуб DNS 15:33</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../lacetti.png" alt="" />
                  <div className="next-info">
                    <h2>
                      В Узбекистане показали тюнинговые варианты моделей
                      Lacetti, Cobalt, Nexia и Spark
                    </h2>
                    <p>
                      «В сети наши потребители обсуждали тему сильного
                      преобладания белого цвета в модельном ряду UzAuto Motors.
                      Почему вы не делаете двухцветные автомобили? Этот вопрос
                      был...
                    </p>
                    <div className="source">
                      <img src="../sputnik.svg" alt="" width={210} />
                      <span>Sputnik Узбекистан 18:43</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../new-apple.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Время автономной работы iPhone 13 Pro Max стало рекордным
                      для смартфонов Apple
                    </h2>
                    <p>
                      Линейка смартфонов iPhone 13 от Apple была презентована на
                      прошлой неделе. Прием предзаказов на устройство стартовал
                      22 сентября, а 24 сентября новинка появилась в магазинах.
                    </p>
                    <div className="source">
                      <img src="../ireactor.svg" alt="" width={210} />
                      <span>iReactor 12:25</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../huobi.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Криптобиржа Huobi закрыла регистрацию пользователей из
                      Китая
                    </h2>
                    <p>
                      Крупнейшая в Китае биржа для торговли биткоинами Huobi
                      приостановила регистрацию пользователей из КНР. Ранее
                      местный Центробанк назвал нелегальными все транзакции...
                    </p>
                    <div className="source">
                      <img src="../company.svg" alt="" width={210} />
                      <span>Компания 11:35</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../international.png" alt="" />
                  <div className="next-info">
                    <h2>
                      В Узбекистане пройдет международный конкурс молодых
                      кинематографистов «Кино за 5 дней»
                    </h2>
                    <p>
                      В Узбекистане 22 сентября стартовал конкурс молодых
                      кинематографистов «Кино за пять дней». Мероприятие
                      проходит в рамках Ташкентского Международного...
                    </p>
                    <div className="source">
                      <img src="../fergana.svg" alt="" width={210} />
                      <span>Фергана 15:44</span>
                    </div>
                  </div>
                </div>
                <div className="side-card">
                  <img src="../elonmusk.png" alt="" />
                  <div className="next-info">
                    <h2>
                      Илон Маск принял участие во Всемирной сетевой конференции
                      в Китае
                    </h2>
                    <p>
                      Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                      проектов) уже второй раз за полторы недели обратился к
                      китайским правящим кругам и гражданам.
                    </p>
                    <div className="source">
                      <img src="../solyonka.svg" alt="" width={210} />
                      <span>FBM.ru 22:23</span>
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
                <img src="../sentabr-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
