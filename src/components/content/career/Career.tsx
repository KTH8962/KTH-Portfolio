import { useEffect } from "react"
import styles from "./Career.module.scss"
import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"

function Career() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.career])
  }, [setClassName])
  return <div className={`${styles.content} ${styles.career}`}>Career</div>
}

export default Career
