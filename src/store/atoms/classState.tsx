import { atom } from "recoil"

export const classState = atom<string[]>({
  key: "classState",
  default: [],
})
