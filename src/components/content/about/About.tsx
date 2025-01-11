import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"
import styles from "./About.module.scss"

function About() {
  const setClassName = useSetRecoilState(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.about])
  }, [setClassName])
  return <div className={`${styles.content} ${styles.about}`}>about</div>
}

export default About
