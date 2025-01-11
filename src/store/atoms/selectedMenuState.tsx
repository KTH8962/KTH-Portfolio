import { atom } from "recoil"

export const selectedMenuState = atom<string>({
  key: "selectedMenuState",
  default: "",
})
