import { useSetRecoilState } from "recoil"
import styles from "./Project.module.scss"
import { classState } from "@/store/atoms/classState"
import { useEffect } from "react"

function Project() {
  const setClassName = useSetRecoilState(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.project])
  }, [setClassName])
  return <div className={`${styles.content} ${styles.project}`}>Project</div>
}

export default Project
