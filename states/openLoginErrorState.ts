import { atom } from "recoil";

export const openLoginErrorState = atom<boolean>({
  key: "openLoginErrorState",
  default: false,
});
