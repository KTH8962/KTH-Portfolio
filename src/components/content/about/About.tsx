import useScrolls from "@/hooks/useScrolls"
import styles from "./About.module.scss"

function About() {
  const test = useScrolls()
  return (
    <div ref={test.element} className={`${styles.content} ${styles.about}`}>
      about
    </div>
  )
}

export default About
