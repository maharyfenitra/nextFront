import { atom } from "recoil";
import { SignUpStatusType } from "../types/SignUpStatusType";

export const signUpStatusState = atom<SignUpStatusType | null>({
  key: "signUpStatusState",
  default: null,
});
