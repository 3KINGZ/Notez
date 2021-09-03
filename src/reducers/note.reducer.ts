import { COLORS } from "styles";
import * as types from "../actions/types";

const date = new Date();

const initialState = {
  loading: false,
  notes: [
    {
      id: "wer",
      title: "How to make your personal brand stand out online",
      body: "lugard things",
      color: COLORS.noteColor2,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things",
      color: COLORS.noteColor2,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things",
      color: COLORS.noteColor2,
      dateCreated: Date.now(),
    },
  ],
};

export const noteReducer = (
  state: { loading: boolean; notes: INote[] } = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_NOTE:
      return { ...state, notes: [payload, ...state.notes] };

    case types.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note: INote) => note.id !== payload),
      };

    case types.SYNC_NOTES.REQUEST:
      return { ...state, loading: true };

    case types.EDIT_NOTE: {
      const id = payload.id;
      const note = payload.note;
      const index = state.notes.findIndex((note: INote) => note.id === id);
      const notes = state.notes;
      notes.splice(index, 1, note);
      return { ...state, notes };
    }

    case types.SYNC_NOTES.SUCCESS:
      return { ...state, loading: false, notes: payload };

    case types.SYNC_NOTES.FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default noteReducer;
