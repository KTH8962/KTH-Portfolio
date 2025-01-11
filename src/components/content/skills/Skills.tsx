import { useSetRecoilState } from "recoil"
import styles from "./Skills.module.scss"
import { classState } from "@/store/atoms/classState"
import { useEffect } from "react"

function Skills() {
  const setClassName = useSetRecoilState(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.skills])
  }, [setClassName])
  return <div className={`${styles.content} ${styles.skills}`}>Skills</div>
}

export default Skills
