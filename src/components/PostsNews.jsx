// Компонент новостной колонки
const PostsNews = () => {
  return (
    <section className="news-container">
      <div className="news-container__categories">
        <a href="#" className="news-container__categories__item">
          <h3>Сейчас в СМИ</h3>
        </a>
        <a href="#" className="news-container__categories__item">
          <h3>в Германии</h3>
        </a>
        <a href="#" className="news-container__categories__item">
          <h3>Рекомендуем</h3>
        </a>
        <span className="color-grey"> 31 июля, среда 02:32</span>
      </div>
      <div className="news-container__news-posts">
        <a href="#" className="news-container__news-posts__item">
          ❗ Коротко о новостях в городе, Кругом одни блогеры, работать некому…
        </a>
        <a href="#" className="news-container__news-posts__item">
          ❗ Кругом одни блогеры, работать некому…
        </a>
        <a href="#" className="news-container__news-posts__item">
          ❗ Легко ли быть блогером?
        </a>
        <a href="#" className="news-container__news-posts__item">
          ❗ Коротко о новостях в городе
        </a>
        <a href="#" className="news-container__news-posts__item">
          ❗ Кругом одни блогеры, работать некому…
        </a>
        <a href="#" className="news-container__news-posts__item">
          ❗ Легко ли быть блогером?
        </a>
      </div>
      <div className="news-container__stock-market">
        <h4 className="news-container__stock-market__item">
          USD MOEX 63,52 <span className="color-grey">+0,09</span>
        </h4>
        <h4 className="news-container__stock-market__item">
          EUR MOEX 70,86 <span className="color-grey">+0,14</span>
        </h4>
        <h4 className="news-container__stock-market__item">
          НЕФТЬ 64,90 <span className="color-grey">+1,63%</span>
        </h4>
      </div>
    </section>
  );
};

export default PostsNews;
