import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"
import styles from "./Archiving.module.scss"

function Archiving() {
  const setClassName = useSetRecoilState(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.archiving])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.archiving}`}>archiving</div>
  )
}

export default Archiving
