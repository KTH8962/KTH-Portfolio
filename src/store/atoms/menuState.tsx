import { atom } from "recoil"

export const menuState = atom<Array<any>>({
  key: "menuState",
  default: [
    { label: "About", name: "About me" },
    { label: "Skills", name: "Skills" },
    { label: "Archiving", name: "Archiving" },
    { label: "Project", name: "Project" },
    { label: "Career", name: "Career" },
  ],
})
