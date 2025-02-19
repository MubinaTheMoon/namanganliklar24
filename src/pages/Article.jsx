import React from "react";

function Article() {
  return (
    <>
      <div className="container">
        <div className="news-wrapper">
          <div className="text-side">
            <div className="source logo-source">
              <img src="../solyonka.svg" width={210} alt="" />
              <span>FBM.ru 22:23</span>
            </div>
            <h2 className="title">
              Илон Маск принял участие во Всемирной сетевой конференции в Китае
            </h2>
            <img className="about-elon" src="../about-elon.png" alt="" />
            <p className="text">
              Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов)
              уже второй раз за полторы недели обратился к китайским правящим
              кругам и гражданам. В видеоролике он уверил их в своей готовности
              инвестировать средства в развитие и расширять бизнес на территории
              этой страны. Особое внимание будет уделяться небезопасности
              обрабатываемых данных.{" "}
            </p>
            <p className="text">
              Они будут храниться только в самом Китае и поэтому будут доступны
              правительству Поднебесной в любой момент.
            </p>
            <p className="text">
              Новые заявления Илон Маск сделал во время видеообращения к
              аудитории мероприятия World Internet Conference, которое прошло в
              конце недели в Поднебесной. Компанию ему составили руководители
              Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm
              (Кристиано Амон), а интересы бизнеса Китайской Народной Республики
              представляли руководители Alibaba и Xiaomi.{" "}
            </p>
            <p className="text">
              Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
              который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
              Поднебесной работать со всеми державами над созданием прозрачной
              цифровой экономики.
            </p>
            <p className="text">
              В ближайшее время Tesla собирается не только сделать шире объёмы
              производства автомобилей на электрической тяге в шанхайском
              филиале, но и разработать силами местной студии недорогую модель
              электрического автомобиля (стоимостью менее 25 000 долларов).
            </p>
            <p className="text">
              Уже в настоящий момент собранные в Китайской Народной Республике
              электрокары Tesla Model Y и Model 3 поставляются на экспорт в
              Европу.
            </p>
            <div className="text-divider"></div>
          </div>

          <div className="right-side">
            <div className="right-info">
              <h2>Главное</h2>
              <div className="inner-info">
                <h3>В Фергане создадут узбекско-пакистанский университет</h3>
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
        <h2 className="interest">По вашим интересам</h2>
        <div className="news-card">
          <div className="side-card">
            <div>
              <h2>
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h2>
              <p>
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <div className="source">
                <img src="../digger.svg" alt="" />
                <span>Digger.ru 14:25</span>
              </div>
            </div>
          </div>
          <div className="side-card">
            <div>
              <h2>
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h2>
              <p>
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <div className="source">
                <img src="../lenta-ru.svg" alt="" />
                <span>Lenta.ru 10:54</span>
              </div>
            </div>
          </div>
          <div className="side-card">
            <div>
              <h2>
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </h2>
              <p>
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <div className="source">
                <img src="../tarantas.svg" alt="" />
                <span>Тарантас Ньюс 10:44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
