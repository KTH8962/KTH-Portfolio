import { useSetRecoilState } from "recoil"
import styles from "./Project.module.scss"
import { classState } from "@/store/atoms/classState"
import { useEffect } from "react"

function Project() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.project])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.project}`}>
      <h2 className={styles.content__tit}>Project</h2>
    </div>
  )
}

export default Project
