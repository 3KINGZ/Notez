import { COLORS } from "styles";
import uuid from "react-native-uuid";
import * as types from "../actions/types";

const initialState = {
  loading: false,
  deleteMode: false,
  notes: [
    {
      id: uuid.v4(),
      title: "How to make your personal brand stand out online",
      body: "online",
      color: COLORS.noteColor1,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title: "Beautiful weather app UI concepts we wish existed",
      body: "online",
      color: COLORS.noteColor2,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title: "10 excellent font pairing tools for designers",
      body: "online",
      color: COLORS.noteColor3,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title:
        "Spotify's Reema Bhagat on product design, music and the key to a happy career",
      body: "online",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title: "12 eye-catching mobile wallpaper",
      body: "online",
      color: COLORS.noteColor5,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title: "eye-catching mobile wallpaper",
      body: "online",
      color: COLORS.noteColor6,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title: "How to make your personal brand stand out online",
      body: "online",
      color: COLORS.noteColor7,
      dateCreated: Date.now(),
    },
    {
      id: uuid.v4(),
      title: "Design For Good: Join The face Mask Challenge",
      body: "online",
      color: COLORS.noteColor1,
      dateCreated: Date.now(),
    },
  ],
  notesToDelete: [],
};

export const noteReducer = (
  state: {
    loading: boolean;
    deleteMode: boolean;
    notes: INote[];
    notesToDelete: string[];
  } = initialState,
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

    case types.EDIT_NOTE: {
      const id = payload.id;
      const note = payload.note;
      const index = state.notes.findIndex((note: INote) => note.id === id);
      const notes = state.notes;
      notes.splice(index, 1, note);
      return { ...state, notes: [...notes] };
    }

    case types.SYNC_NOTES:
      return { ...state, loading: false, notes: [...payload, ...state.notes] };

    case types.TOGGLE_DELETE:
      return {
        ...state,
        deleteMode: !state.deleteMode,
        notesToDelete: state.deleteMode ? [] : state.notesToDelete,
      };

    case types.SET_NOTE_TO_DELETE: {
      const isIncluded = state.notesToDelete.includes(payload);
      return {
        ...state,
        notesToDelete: isIncluded
          ? state.notesToDelete.filter(note => note !== payload)
          : [payload, ...state.notesToDelete],
      };
    }

    case types.DELETE_NOTES:
      return {
        ...state,
        notes: state.notes.filter(
          note => !state.notesToDelete.includes(note.id),
        ),
      };

    default:
      return state;
  }
};

export default noteReducer;
