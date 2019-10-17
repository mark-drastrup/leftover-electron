import { createStore } from "redux";

const initialState = {
  recipes: [],
  query: "",
  food: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES": {
      const copiedState = Object.assign({}, state);
      copiedState.recipes = [...action.data];
      return copiedState;
    }
    case "UPDATE_QUERY": {
      const copiedState = Object.assign({}, state);
      copiedState.query = action.data;
      return copiedState;
    }
    case "FETCH_FOOD": {
      const copiedState = Object.assign({}, state);
      copiedState.food = [...copiedState.food, ...action.data];
      return copiedState;
    }
    case "ADD_FOOD": {
      const copiedState = Object.assign({}, state);
      copiedState.food = [...copiedState.food, action.data.data[0]];
      console.log(copiedState);
      return copiedState;
    }
    case "DELETE_FOOD": {
      const copiedState = Object.assign({}, state);
      console.log(action.data.data[0]);
      copiedState.food = copiedState.food.filter(
        item => item.id !== action.data.data[0].id
      );
      return copiedState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
