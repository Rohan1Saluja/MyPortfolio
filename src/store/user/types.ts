export enum UserActionTypes {
  SET_USER_DATA = "SET_USER_DATA",
  SAVE_USER_INFO = "SAVE_USER_INFO",
  SAVE_PREFERENCES = "SAVE_PREFERENCES",
  SAVE_ACCOUNT_SETUP = "SAVE_ACCOUNT_SETUP",
}

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

interface Preferences {
  receiveNotifications: boolean;
  enableBetaFeatures: boolean;
}

interface AccountSetup {
  password: string;
  confirmPassword: string;
}

export interface InitialState {
  create: {
    userInfo: UserInfo;
    preferences: Preferences;
    accountSetup: AccountSetup;
  };
}
