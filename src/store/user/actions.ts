import { UserActionTypes } from "./types";

export const saveUserInfo = (payload: any) => {
  return {
    type: UserActionTypes.SAVE_USER_INFO,
    payload,
  };
};
export const savePreferences = (payload: any) => {
  return {
    type: UserActionTypes.SAVE_PREFERENCES,
    payload,
  };
};
export const saveAccountSetup = (payload: any) => {
  return {
    type: UserActionTypes.SAVE_ACCOUNT_SETUP,
    payload,
  };
};
