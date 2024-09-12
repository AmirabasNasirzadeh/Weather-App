import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_URL, getJSON } from "./helpers";
import * as model from "./model";
import view from "./view";
import { async } from "regenerator-runtime";

const controlData = async function () {
  try {
    const query = view.getQuery();

    // 1) Render the spinner
    view.spinner();

    // 2) Search for city data
    await model.setCityData(query);

    // 3) Render the city data
    view.render(model.state.data);
  } catch (error) {
    view.renderError(error.message);
  }
};

const init = function () {
  view.addHandlerSearch(controlData);
};

init();
