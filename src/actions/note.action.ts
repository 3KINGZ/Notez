import * as types from "./types";

export const addNote = (note: INote) => (dispatch: any) => {
  console.log("frm action", note);
  dispatch({ type: types.ADD_NOTE, payload: note });
};

export const deleteNote = (id: string) => (dispatch: any) => {
  dispatch({ type: types.DELETE_NOTE, payload: id });
};

export const editNote = (id: string, note: INote) => (dispatch: any) => {
  dispatch({ type: types.EDIT_NOTE, payload: { id, note } });
};

export const syncNotes = (notes: INote) => async (dispatch: any) => {
  dispatch({ type: types.SYNC_NOTES, payload: notes ? notes : [] });
};

export const toggleDelete = () => async (dispatch: any) => {
  dispatch({ type: types.TOGGLE_DELETE });
};

export const setNoteToDelete = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.SET_NOTE_TO_DELETE, payload: id });
};

export const deleteNotes = () => async (dispatch: any) => {
  dispatch({ type: types.DELETE_NOTES });
};
