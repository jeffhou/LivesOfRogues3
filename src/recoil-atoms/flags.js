import { atom } from "recoil";

export const FlagsAtom = atom({
  key: "flags",
  default: {
    debug: true
  }
});
