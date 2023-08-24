import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body">

    <div className="page">

      <header className="header">

        <img className="header__logo" src="" alt="Логотип 'Место'"/>

          <div className="header__line"></div>

      </header>

      <main className="content">

        <section className="profile">

          <div className="profile__avatar-container">
            <button className="profile__avatar-edd"></button>
            <img className="profile__avatar" src="#" alt="Аватар профиля"/>
          </div>


          <div className="profile__info">

            <h1 className="profile__name"></h1>

            <button type="button" className="profile__edit-button profile__edit-button-link"></button>

            <p className="profile__about"></p>

          </div>

          <button type="button" className="profile__add-button"></button>

        </section>

        <section className="elements">

        </section>

      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>

    </div>

    <section className="popup popup_type_edit">

      <div className="popup__container popup__container_type_edit">

        <h2 className="popup__name">Редактировать профиль</h2>

        <form name="profile-name" className="popup__form popup__form_edit" noValidate>

          <input placeholder="Имя" required id="name" autoComplete="off" minLength="2" maxLength="40"
                 className="popup__input popup__input_type_name" name="name"/>

            <span id="err-name" className="popup__error"></span>

            <input placeholder="О себе" required id="about" autoComplete="off" minLength="2" maxLength="200"
                   className="popup__input popup__input_type_about" name="about"/>

              <span id="err-about" className="popup__error"></span>

              <button type="submit" className="popup__submit-btn">Сохранить</button>
        </form>

        <button type="button" className="popup__close"></button>

      </div>

    </section>

    <section className="popup popup_type_add">

      <div className="popup__container popup__container_type_add">

        <h2 className="popup__name">Новое место</h2>

        <form name="profile-name" className="popup__form popup__form_add" noValidate>

          <input required minLength="2" maxLength="30" autoComplete="off" id="name-image"
                 className="popup__input popup__input_type_name" name="name" placeholder="Название"/>

            <span id="err-name-image" className="popup__error"></span>

            <input type="url" required id="link" className="popup__input popup__input_type_link" name="link"
                   placeholder="Ссылка на картинку"/>

              <span id="err-link" className="popup__error"></span>

              <button type="submit" className="popup__submit-btn">Создать</button>
        </form>

        <button type="button" className="popup__close"></button>

      </div>

    </section>

    <section className="popup popup_type_image">

      <figure className="popup__container popup__container_type_image">

        <button type="button" className="popup__close"></button>

        <img className="popup__image"
             src=""
             alt=""/>

          <figcaption className="popup__image-name"></figcaption>

      </figure>
    </section>

    <section className="popup popup_type_delete">

      <div className="popup__container popup__container_type_delete">

        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close"
        ></button>
        <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
        <form
          className="popup__form popup__form_type_delete"
          name="delete-form"
          noValidate
        >
          <button type="submit" className="popup__submit-btn">Да</button>
        </form>

      </div>

    </section>

    <section className="popup popup_type_avatar">
      <div className="popup__container popup__container_type_avatar">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close"
        ></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form
          className="popup__form popup__form_avatar"
          name="avatar-form"
          noValidate
        >
          <input
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar"
            required
          />
          <span id="err-avatar" className="popup__error avatar-error"></span>
          <button type="submit" className="popup__submit-btn">Сохранить</button>
        </form>
      </div>
    </section>

    <template className="elements-template">

      <div class="element">

        <button type="button" class="element__delete"></button>

        <img class="element__photo" src="#" alt="Фотография картины"/>

          <div class="element__container">

            <h2 class="element__name">Карачаевск</h2>

            <div class="element__like-container">

              <button type="button" class="element__like-button"></button>
              <p class="element__like-count">0</p>
            </div>

          </div>

      </div>

    </template>

    </div>
  );
}

export default App;
