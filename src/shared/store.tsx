import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addBriefReducer, getProductsReducer } from '../features/BriefForm/reducer';
import { fetchBriefsReducer, filterKeyReducer } from '../features/BriefList/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducers = combineReducers({
  addBrief: addBriefReducer,
  getProducts: getProductsReducer,
  briefs: fetchBriefsReducer,
  filter:filterKeyReducer
});

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    composeEnhancers()
  )
);

export type RootState = ReturnType<typeof store.getState>;