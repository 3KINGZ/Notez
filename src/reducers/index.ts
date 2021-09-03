import { combineReducers } from "redux";

import { default as note } from "./note.reducer";

const rootReducer = combineReducers({
  note,
});

export default rootReducer;
