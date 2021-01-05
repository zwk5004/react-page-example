import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

const composeEnhancers = compose;

export function getStore() {
  return createStore(composeEnhancers(applyMiddleware(reduxThunk)));
}

export default getStore();
