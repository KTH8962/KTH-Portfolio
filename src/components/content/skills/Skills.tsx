import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"
import { useEffect } from "react"
import styles from "./Skills.module.scss"

function Skills() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.skills])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.skills}`}>
      <h2 className={styles.content__tit}>Skills</h2>
      <div className={styles.skills__wrap}>
        <ul className={styles.skills__list}>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.code}`}>Code</h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>JavaScript</span>
              <span className={styles.skills__info__item}>TypeScript</span>
              <span className={styles.skills__info__item}>Java</span>
            </div>
          </li>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.pub}`}>Pub</h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>HTML</span>
              <span className={styles.skills__info__item}>CSS</span>
              <span className={styles.skills__info__item}>SASS(SCSS)</span>
              <span className={styles.skills__info__item}>jQuery</span>
              <span className={styles.skills__info__item}>Gulp</span>
            </div>
          </li>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.front}`}>Front</h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>REACT(Recoil)</span>
              <span className={styles.skills__info__item}>REACT(Zustand)</span>
              <span className={styles.skills__info__item}>
                REACT(React Query)
              </span>
              <span className={styles.skills__info__item}>REACT(Next)</span>
              <span className={styles.skills__info__item}>REACT(Vitest)</span>
              <span className={styles.skills__info__item}>REACT(Cypress)</span>
              <span className={styles.skills__info__item}>Vue(Pinia)</span>
            </div>
          </li>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.back}`}>Back</h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>Spring Boot</span>
              <span className={styles.skills__info__item}>MyBatis</span>
              <span className={styles.skills__info__item}>JPA</span>
              <span className={styles.skills__info__item}>OracleDB</span>
              <span className={styles.skills__info__item}>MySQL</span>
            </div>
          </li>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.deploy}`}>Deploy</h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>Vercel</span>
              <span className={styles.skills__info__item}>AWS</span>
            </div>
          </li>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.tool}`}>Tool</h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>VSCode</span>
              <span className={styles.skills__info__item}>Ecllipse</span>
              <span className={styles.skills__info__item}>Intellij</span>
              <span className={styles.skills__info__item}>PhotoShop</span>
            </div>
          </li>
          <li>
            <h3 className={`${styles.skills__tit} ${styles.community2}`}>
              Community
            </h3>
            <div className={styles.skills__info}>
              <span className={styles.skills__info__item}>Figma</span>
              <span className={styles.skills__info__item}>Slack</span>
              <span className={styles.skills__info__item}>REDMINE</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
