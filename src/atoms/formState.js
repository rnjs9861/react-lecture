import { atom } from "recoil";

export const userNameState = atom({ key: "userNameState", default: "" });
export const userEmailState = atom({ key: "userEmailState", default: "" });
export const userPasswordState = atom({
  key: "userPasswordState",
  default: "",
});
