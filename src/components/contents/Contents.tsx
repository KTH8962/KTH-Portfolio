import About from "../content/about/About"
import Archiving from "../content/archiving/Archiving"
import Career from "../content/career/Career"
import Project from "../content/project/Project"
import Skills from "../content/skills/Skills"
import styles from "./Contents.module.scss"

function Contents() {
  const components = { About, Skills, Archiving, Project, Career }

  return (
    <div className={styles.contents} style={{ backgroundColor: "#fff" }}>
      <div className={`${styles.content} ${styles.visual}`}></div>
      <About />
      <Skills />
      <Archiving />
      <Project />
      <Career />
    </div>
  )
}

export default Contents
