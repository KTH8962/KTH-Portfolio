import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"
import { useEffect } from "react"
import styles from "./Archiving.module.scss"

function Archiving() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.archiving])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.archiving}`}>
      <h2 className={styles.content__tit}>Archiving</h2>
      <div className={styles.archiving__wrap}>
        <ul className={styles.archiving__list}>
          <li>
            <a href="https://github.com/KTH8962" target="_blank">
              <span className={styles.archiving__tit}>GitHub</span>
              <span className={styles.archiving__desc}>
                소스코드 저장소 GitHub입니다.
              </span>
              <span className={styles.archiving__desc}>
                과거부터 현재까지 모든 소스 코드입니다.
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Archiving
