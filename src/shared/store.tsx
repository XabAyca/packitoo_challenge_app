import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addBriefReducer } from "../features/BriefForm/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducers = combineReducers({
  addBrief:addBriefReducer,
});

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    composeEnhancers()
  )
);