// Компонент Прочее (самый низ веб сайта)
const Other = () => {
  return (
    <div className="other-columns">
      <div className="other-columns__item">
        <div>
          <a href="#" className="other-item">
            <h3>Погода</h3>
          </a>

          <img
            src="https://htmlbook.ru/files/images/practical/47_1.png"
            alt="Погода"
          />
        </div>
        <div>
          <a href="#" className="other-item">
            <h3>Посещаемое</h3>
          </a>

          <p>Недвижимость - о сталинках</p>
          <p>Маркет - люстры</p>
          <p>Авто.ру - привод 4х4 до 500.000</p>
        </div>
      </div>

      <div className="other-columns__item">
        <a href="#" className="other-item">
          <h3>Карта Германии</h3>
        </a>

        <p>Расписание</p>
        <div>
          <a href="#" className="other-item">
            <h3>Телепрограмма</h3>
          </a>

          <p>
            02:00 ТНТ.Best <span className="color-grey"> ТНТ</span>
          </p>
          <p>
            02:15 Джинглики <span className="color-grey"> Карусель</span>
          </p>
          <p>
            02:25 Наедине со всеми <span className="color-grey"> Первый</span>
          </p>
        </div>
      </div>

      <div className="other-columns__item">
        <a href="#" className="other-item">
          <h3>Эфир</h3>
        </a>

        <p>
          Управление как искусство <span className="color-grey"> Успех</span>
        </p>
        <p>
          Ночь. Мир в это время <span className="color-grey"> ТВ</span>
        </p>
      </div>
    </div>
  );
};

export default Other;
