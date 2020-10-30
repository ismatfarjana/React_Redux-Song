import React from "react";
import ReactDOM from "react-dom";
//need  the provider tag at the top of components-> pass a reference to our redux store that holds all the reducers loaded up into it ->  create an instance of th provider and wrape it with app component in it-> pass single prop named store in provider component -> store will call the create store and passin the reducers ->
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
