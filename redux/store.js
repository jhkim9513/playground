const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

// actions
// action-types
const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
const ADD_VIEWCOUNT = "ADD_VIEWCOUNT";
const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};
const subtractSubscriber = () => {
  return {
    type: "SUBTRACT_SUBSCRIBER",
  };
};
const addViewCount = () => {
  return {
    type: ADD_VIEWCOUNT,
  };
};

// reducers : action을 handling함
const subscriberState = {
  subscribers: 365,
};
const subscriberReducer = (state = subscriberState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    case "SUBTRACT_SUBSCRIBER":
      return {
        ...state,
        subscriber: state.subscribers - 1,
      };
    default:
      return state;
  }
};

const viewState = {
  viewCount: 100,
};
const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  view: viewReducer,
  subscriber: subscriberReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));

//subscribe -view -dispatch
// store.subscribe(() => {
//   console.log("subscribe ==>>", store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(subtractSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());
