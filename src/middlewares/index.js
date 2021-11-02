import { applyMiddleware } from "redux";

const logger = store => next => action => {
  console.log(`${action.type} Fired!`);
  next(action);
};
const multipleActions = store => next => action => {
  if (Array.isArray(action)) {
    action.forEach(act => store.dispatch(act));
  } else {
    next(action);
  }
}
const fnMw = store => next => action => {
  if (typeof action === "function") {
    action(store.dispatch)
  } else {
    next(action);
  }
}

const mws = applyMiddleware(multipleActions, fnMw, logger);
export default mws;