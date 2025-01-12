import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"
import { useEffect } from "react"
import styles from "./About.module.scss"
import { Link } from "react-router-dom"

function About() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.about])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.about}`}>
      <h2 className={styles.content__tit}>About me</h2>
      <div className={styles.about__wrap}>
        <ul className={styles.about__list}>
          <li>
            <h3 className={styles.about__tit}>이름</h3>
            <p className={styles.about__desc}>김태환</p>
          </li>
          <li>
            <h3 className={styles.about__tit}>생년월일</h3>
            <p className={styles.about__desc}>89. 12. 23</p>
          </li>
          <li>
            <h3 className={styles.about__tit}>연락처</h3>
            <p className={styles.about__desc}>
              <Link to="tel:010-8962-2170">010-8962-2170</Link>
            </p>
          </li>
          <li>
            <h3 className={styles.about__tit}>이메일</h3>
            <p className={styles.about__desc}>
              <Link to="mailto:gaya8962@gmail.com">gaya8962@gmail.com</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
