import { COLORS } from "styles";
import * as types from "../actions/types";

const date = new Date();

const initialState = {
  loading: false,
  notes: [
    {
      id: "wer",
      title: "How to make your personal brand stand out online",
      body: "lugard things Id eiusmod nostrud ad dolore enim ad aliqua ipsum nulla ut qui fugiat do aute. Est aliqua eiusmod ullamco proident nisi duis labore esse incididunt duis laboris amet Lorem. Occaecat elit ipsum velit cillum aute in tempor eiusmod. Exercitation mollit nostrud velit sunt dolore Lorem ipsum aute ipsum pariatur dolor. Lorem et tempor et velit. Adipisicing eu adipisicing amet culpa voluptate labore consectetur ex aliquip occaecat anim. In enim Lorem consequat adipisicing nostrud sint fugiat esse reprehenderit proident ex ex sint. Labore cillum cupidatat pariatur officia quis aliquip culpa. Anim veniam officia anim esse dolore pariatur adipisicing incididunt deserunt nulla nisi. Officia amet ut proident excepteur duis labore. Consectetur exercitation aute proident quis deserunt adipisicing cillum dolore fugiat consectetur. Ipsum cillum est esse nisi quis eiusmod consectetur elit magna. Consectetur cupidatat do nisi adipisicing laborum. Duis pariatur cupidatat reprehenderit et elit magna tempor aliqua duis. ",
      color: COLORS.noteColor2,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things",
      color: COLORS.noteColor3,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
      dateCreated: Date.now(),
    },
    {
      id: "wer2",
      title:
        "How to make your personal brand stand out online brand stand out online brand stand out online",
      body: "lugard things check",
      color: COLORS.noteColor4,
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
