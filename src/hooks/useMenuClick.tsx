import { classState } from "@/store/atoms/classState"
import { useRecoilValue } from "recoil"

function useMenuClick() {
  const name = useRecoilValue(classState)

  const handleMenuClick = (menu: string) => {
    const filterClass = name.filter((className: string) =>
      className.includes(menu)
    )
    const headerHeight = document.querySelector("header").clientHeight
    const selectedItem = document.querySelector(`.${filterClass[0]}`)
    window.scrollTo({
      behavior: "smooth",
      top:
        selectedItem.getBoundingClientRect().top -
        headerHeight +
        window.scrollY,
    })
  }

  return handleMenuClick
}

export default useMenuClick
