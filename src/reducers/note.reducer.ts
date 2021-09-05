import * as types from "../actions/types";

const initialState = {
  loading: false,
  deleteMode: false,
  notes: [],
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

    case types.SELECT_ALL:
      return {
        ...state,
        notesToDelete: state.notes.map(note => note.id),
      };

    case types.UNSELECT_ALL:
      return {
        ...state,
        notesToDelete: [],
      };

    default:
      return state;
  }
};

export default noteReducer;
