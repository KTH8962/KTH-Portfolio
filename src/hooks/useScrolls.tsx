import { useRef } from "react"

function useScrolls() {
  const element = useRef<HTMLDivElement>()
  const onMoveElement = () => {
    element.current?.scrollTo({
      top: element.current?.offsetTop,
      behavior: "smooth",
    })
    console.log(element)
  }

  return { element, onMoveElement }
}

export default useScrolls
