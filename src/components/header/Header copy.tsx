import { useState } from "react"
import styles from "./Header.module.scss"
import useScrolls from "@/hooks/useScrolls"

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const gnbTabs = {
    0: useScrolls({ menu: "About me" }),
    1: useScrolls({ menu: "Skills" }),
    2: useScrolls({ menu: "Archiving" }),
    3: useScrolls({ menu: "Projects" }),
    4: useScrolls({ menu: "Career" }),
  }
  // const [element, onMoveElement] = useScroll()
  const handleActive = () => {
    setIsActive(!isActive)
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
            {Object.entries(gnbTabs).map(([index, tab]) => (
              <li key={index}>
                <button onClick={tab.onMoveElement}>{tab.name}</button>
              </li>
            ))}
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
