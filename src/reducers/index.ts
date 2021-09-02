import { combineReducers } from "redux";

import { default as note } from "./note.reducer";

const appReducer = combineReducers({
  note,
});

export default appReducer;
