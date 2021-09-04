import * as types from "./types";
import { getObjectValue } from "./../utils/storage/get";

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
