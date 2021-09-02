import * as types from "./types";
import { getObjectValue } from "./../utils/storage/get";

export const addNote = (note: INote) => (dispatch: any) => {
  dispatch({ type: types.ADD_NOTE, payload: note });
};

export const deleteNote = (id: string) => (dispatch: any) => {
  dispatch({ type: types.DELETE_NOTE, payload: id });
};

export const editNote = (id: string, note: INote) => (dispatch: any) => {
  dispatch({ type: types.EDIT_NOTE, payload: { id, note } });
};

export const syncNotes = () => async (dispatch: any) => {
  dispatch({ type: types.SYNC_NOTES.REQUEST });

  const notes = await getObjectValue("notes");

  try {
    dispatch({ type: types.SYNC_NOTES.SUCCESS, payload: notes ? notes : [] });
  } catch (error) {
    dispatch({ type: types.SYNC_NOTES.FAILURE });
  }
};
