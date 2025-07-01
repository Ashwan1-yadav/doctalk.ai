import { createContext, Dispatch, SetStateAction } from "react";
import { UserDataType } from "../app/provider";

export type UserContextType = {
  userData: UserDataType | null;
  setUserData: Dispatch<SetStateAction<UserDataType | null>>;
};

export const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});


