import { PayloadAction } from '@reduxjs/toolkit';

interface RootState {
  text: string;
}

const initialState: RootState = {
  text: '',
};

function rootReducer(state = initialState, action: PayloadAction<string>) {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

export default rootReducer;