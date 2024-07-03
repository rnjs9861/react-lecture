import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { UserInfo } from "../types/UserInfo";

// 추후 export 할 자료 모양이므로

interface LoginContextProps {
  userInfo: UserInfo | null;
  userLang: string | null;
  setUserInfo: Dispatch<SetStateAction<UserInfo | null>>;
  setUserLang: Dispatch<SetStateAction<string | null>>;
}

export const LoginContext = createContext<LoginContextProps | null>(null);
