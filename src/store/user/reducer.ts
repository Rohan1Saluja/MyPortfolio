import { InitialState, UserActionTypes } from "./types";
import { produce } from "immer";

export const initialState: InitialState = {
  create: {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
    },
    preferences: {
      receiveNotifications: false,
      enableBetaFeatures: false,
    },
    accountSetup: {
      password: "",
      confirmPassword: "",
    },
  },
};

export const user = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case UserActionTypes.SET_USER_DATA:
        draft.create = action.payload;
        break;
      case UserActionTypes.SAVE_USER_INFO:
        draft.create.userInfo = action.payload;
        break;
      case UserActionTypes.SAVE_PREFERENCES:
        draft.create.preferences = action.payload;
        break;
      case UserActionTypes.SAVE_ACCOUNT_SETUP:
        draft.create.accountSetup = action.payload;
        break;

      default:
        return state;
    }
  });
