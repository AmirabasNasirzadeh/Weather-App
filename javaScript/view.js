class View {
  _data;
  _errorMessage = `Couldn't find any data! please try again ):`;
  _parentEl = document.querySelector(`.parent`);
  _form = document.querySelector(`.search`);

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0) || (data.cod && data.cod !== 200))
      return this.renderError();

    this._data = data;
    const html = this._generateHTML();

    this._clear();
    this._parentEl.insertAdjacentHTML(`beforeend`, html);
  }

  _clear() {
    this._parentEl.innerHTML = ``;
  }

  spinner() {
    const html = `<img src="loading.5b8b5f63.png" class="spinner">`;
    this._clear();
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  renderError(message = this._errorMessage) {
    const html = `<p class="parent__description">
                    ${message}
                  </p>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  _generateHTML() {
    return `<div class="info">
                    <div class="grid--2">
                      <div>
                        <p class="degree">
                          ${this._data.cityTemp}
                        </p>
                        <span class="degree--unit">c</span>
                      </div>
                      <div class="condition">
                        <img src="https://openweathermap.org/img/wn/${this._data.weatherIcon}@2x.png" alt="Weather condition image" class="condition__image">
                        <p class="condition__description">${this._data.weatherDescription}</p>
                      </div>
                    </div>

                    <div class="grid--3">
                      <p class="city__name">
                        ${this._data.cityName}
                      </p>
                      <div class="line--v"></div>
                      <p class="city__time">
                        ${this._data.cityTime}
                      </p>
                    </div>

                    <div class="line--h"></div>

                    <div class="grid--7">
                      <div class="flex--v">
                        <p class="city__sunrise--description">
                          Sunrise
                        </p>
                        <p class="city__sunrise--value">
                          ${this._data.citySunrise}
                        </p>
                      </div>

                      <div class="line--v"></div>

                      <div class="flex--v">
                        <p class="city__sunrise--description">
                          Sunset
                        </p>
                        <p class="city__sunrise--value">
                          ${this._data.citySunset}
                        </p>
                      </div>

                      <div class="line--v"></div>

                      <div class="flex--v">
                        <p class="city__sunrise--description">
                          Humidity
                        </p>
                        <p class="city__sunrise--value">
                          ${this._data.cityHumidity}
                        </p>
                      </div>

                      <div class="line--v"></div>

                      <div class="flex--v">
                        <p class="city__sunrise--description">
                          Wind
                        </p>
                        <p class="city__sunrise--value">
                          ${this._data.cityWind}
                        </p>
                      </div>
                    </div>
                  </div>`;
  }

  _clearInput() {
    this._form.querySelector(`.search__input`).value = ``;
  }

  getQuery() {
    const query = document.querySelector(`.search__input`).value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._form.addEventListener(`submit`, function (event) {
      event.preventDefault();
      handler();
    });
  }
}

export default new View();
