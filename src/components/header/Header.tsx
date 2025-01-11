import { useState } from "react"
import styles from "./Header.module.scss"
import useMenuClick from "@/hooks/useMenuClick"

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const menuList = [
    { label: "about", name: "About me" },
    { label: "skills", name: "skills" },
    { label: "archiving", name: "Archiving" },
    { label: "project", name: "Project" },
    { label: "career", name: "career" },
  ]
  const handleMenuClick = useMenuClick()

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
                <li key={tab.label}>
                  <button
                    type="button"
                    onClick={() => {
                      handleMenuClick(`${tab.label}`)
                    }}
                  >
                    {tab.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
        <button
          type="button"
          className={styles.mBtn}
          onClick={() => {
            setIsActive(!isActive)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
