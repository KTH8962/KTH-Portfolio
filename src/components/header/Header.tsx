import { useState } from "react"
import styles from "./Header.module.scss"
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useSetRecoilState,
} from "recoil"
import { menuState } from "@/store/atoms/menuState"
import { selectedMenuState } from "@/store/atoms/selectedMenuState"

function Header() {
  //const setSelectedMenu = useSetRecoilState(selectedMenuState)
  const [selectedMenu, setSelectedMenu] =
    useRecoilStateLoadable(selectedMenuState)
  const menuList = useRecoilValue(menuState)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  // const [element, onMoveElement] = useScroll()
  const handleActive = () => {
    setIsActive(!isActive)
  }
  const handleClick = (menuName) => {
    setSelectedMenu(menuName)
    console.log(selectedMenu)
  }
  window.onresize = () => {
    setWindowWidth(window.innerWidth)
    if (windowWidth > 768) {
      setIsActive(false)
    }
  }
  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__wrapper} ${isActive ? styles.active : ""}`}
      >
        <h1 className={styles.header__logo}>KTH Portfolio</h1>
        <nav className={styles.gnb}>
          <ul>
            {menuList.map((tab) => {
              return (
                <li key={tab.name}>
                  <button
                    type="button"
                    onClick={() => handleClick(tab.label)}
                    // onClick={() => {
                    //   setSelectedMenu(tab.label)
                    //   console.log(tab.label, selectedMenu)
                    // }}
                  >
                    {tab.name}
                  </button>
                </li>
              )
            })}
            {/* {Object.entries(menus).map(([index, tab]) => (
              <li key={index}>
                <button onClick={tab[0].onMoveElement}>이름</button>
              </li>
            ))} */}
          </ul>
        </nav>
        <button type="button" className={styles.mBtn} onClick={handleActive}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
