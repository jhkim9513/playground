const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// actions
// action-types
const UP_LEVEL = "UP_LEVEL";
const RESET_NAME = "RESET_NAME";
const upLevel = () => {
  return {
    type: UP_LEVEL,
  };
};

const resetName = () => {
  return {
    type: RESET_NAME,
  };
};

// reducers : action을 handling함
const levelState = {
  level: 0,
};
const nameState = {
  name: "Tom",
};

const levelReducer = (state = levelState, action) => {
  switch (action.type) {
    case UP_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    default:
      return state;
  }
};

const nameReducer = (state = nameState, action) => {
  switch (action.type) {
    case RESET_NAME:
      return {
        ...state,
        name: "",
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  level: levelReducer,
  name: nameReducer,
});

// store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("subscribe ==>>", store.getState());
});

store.dispatch(upLevel());
store.dispatch(upLevel());
store.dispatch(resetName());
