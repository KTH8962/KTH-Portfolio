import { useRecoilState, useRecoilValue } from "recoil"
import About from "../content/about/About"
import Archiving from "../content/archiving/Archiving"
import Career from "../content/career/Career"
import Project from "../content/project/Project"
import Skills from "../content/skills/Skills"
import styles from "./Contents.module.scss"
import { selectedMenuState } from "@/store/atoms/selectedMenuState"
import { menuState } from "@/store/atoms/menuState"
import React, { useEffect, useRef } from "react"

function Contents() {
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState)
  const menuList = useRecoilValue(menuState)
  const refs = useRef({})

  // refs 초기화
  useEffect(() => {
    menuList.forEach((menu) => {
      refs.current[menu.label] = refs.current[menu.label] || React.createRef()
    })
  }, [menuList])

  useEffect(() => {
    console.log(selectedMenu, refs.current[selectedMenu]?.current, refs)
    if (refs.current[selectedMenu]?.current) {
      refs.current[selectedMenu].current.scrollIntoView({ behavior: "smooth" })
      setSelectedMenu("")
    }
  }, [selectedMenu])

  const components = { About, Skills, Archiving, Project, Career }

  const renderContent = (name) => {
    const Component = components[name]
    if (Component) {
      return <Component />
    }
    return null
  }

  return (
    <div className={styles.contents} style={{ backgroundColor: "#fff" }}>
      <div className={`${styles.content} ${styles.visual}`}></div>
      {menuList.map((menu) => (
        <div key={menu.label} ref={refs.current[menu.label]}>
          {renderContent(menu.label)}
        </div>
      ))}
    </div>
  )
}

export default Contents
