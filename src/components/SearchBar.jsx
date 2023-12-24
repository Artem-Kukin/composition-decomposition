// Компонент поисковой строки 
const SearchBar = () => {
  return (
    <form className="search-interface">
      <div className="search-nav">
        <a href="#" className="search-nav__item">
          <h4>Видео</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>Картинки</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>Новости</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>Карты</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>Маркет</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>Переводчик</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>Эфир</h4>
        </a>

        <a href="#" className="search-nav__item">
          <h4>еще</h4>
        </a>
      </div>
      <div className="search-input">
        <img className="search-input__img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw1ZAaBWlfMrKlkyA-dXAPWQD-Pm_pH2puYdoB4vkW5nCXPN-fmfvjG9LCDfEhAmYYYM&usqp=CAU" alt="Logo" />
        <input type="text" />
        <button onClick={(e) => e.preventDefault()}>Поиск</button>
      </div>
      <div>
        Найдется всё. Например:
        <span className="color-grey"> фаза луны сегодня</span>
      </div>
    </form>
  );
};

export default SearchBar;
