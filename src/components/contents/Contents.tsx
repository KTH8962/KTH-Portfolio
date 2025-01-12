import useMenuClick from "@/hooks/useMenuClick"
import About from "../content/about/About"
import Archiving from "../content/archiving/Archiving"
import Career from "../content/career/Career"
import Project from "../content/project/Project"
import Skills from "../content/skills/Skills"
import styles from "./Contents.module.scss"

function Contents() {
  const handleMenuClick = useMenuClick()
  return (
    <div className={styles.contents}>
      <div className={`${styles.visual}`}>
        <div className={styles.visual__wrapper}>
          <h2 className={styles.visual__tit}>
            퍼블리싱(경력) + 개발자(신입) <br />
            김태환
          </h2>
          <p className={styles.visual__desc}>
            안녕하세요.
            <br />
            퍼블리셔와 웹개발도 꿈꾸는 개발자 지원자
            <br />
            김태환입니다.
          </p>
          <button
            className={styles.visual__btn}
            type="button"
            onClick={() => {
              handleMenuClick("about")
            }}
          >
            더 알아보기 <span>↓</span>
          </button>
        </div>
      </div>
      <About />
      <Skills />
      <Archiving />
      <Project />
      <Career />
    </div>
  )
}

export default Contents
