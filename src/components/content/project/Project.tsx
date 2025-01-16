import { useSetRecoilState } from "recoil"
import styles from "./Project.module.scss"
import { classState } from "@/store/atoms/classState"
import { useMemo } from "react"

function Project() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useMemo(() => {
    setClassName((prevClassName) => [...prevClassName, styles.project])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.project}`}>
      <h2 className={`${styles.content__tit} ${styles.content__txt}`}>
        Project
      </h2>
      <div className={styles.project__wrap}>
        <ul className={styles.project__list}>
          <li>
            <h3 className={styles.project__tit}>DailySync</h3>
            <span className={styles.project__date}>
              2024. 11 ~ 2024. 12(4인 팀프로젝트)
            </span>
            <div className={styles.project__info}>
              <h4 className={styles.project__info__tit}>
                To-do, 일정관리, 식단, 가계부가 하나의 웹사이트
              </h4>
              <ul className={styles.project__info__list}>
                <li>
                  기존의 To-do, 일정관리 식단, 가계부등 내가 쓰고 싶은 사이트를
                  하나로 개발
                </li>
                <li>국비지원에서 배우지 못한 JPA를 사용하여 개발</li>
                <li>국비지원에서 JSP에 올리던 Vue를 Cli로 개발</li>
              </ul>
              <p className={styles.project__info__skills}>
                Vue, Pinia, SCSS, JPA, SpringBoot, MySQL, Axios
              </p>
            </div>
            <div className={styles.project__links}>
              <a
                href="https://github.com/KTH8962/DailySyncTeam"
                target="_blank"
              >
                소스보기
              </a>
            </div>
          </li>
          <li>
            <h3 className={styles.project__tit}>포트폴리오 웹사이트</h3>
            <span className={styles.project__date}>
              2025. 01(1인 개인프로젝트)
            </span>
            <div className={styles.project__info}>
              <h4 className={styles.project__info__tit}>포트폴리오 웹사이트</h4>
              <ul className={styles.project__info__list}>
                <li>React을 이용하여 나만의 웹사이트 제작</li>
                <li>Recoil과 Hook을 만들어 스크롤 이벤트 적용</li>
                <li>Vercel을 이용해 사이트 배포</li>
              </ul>
              <p className={styles.project__info__skills}>
                TypeScript, React, Recoil, SCSS, Vercil
              </p>
            </div>
          </li>
          <li>
            <h3 className={styles.project__tit}>Unplash + Vercel배포</h3>
            <span className={styles.project__date}>
              2025. 01(1인 개인프로젝트)
            </span>
            <div className={styles.project__info}>
              <h4 className={styles.project__info__tit}>
                Unplash API를 이용하여 Vercel에 React플젝 배포
              </h4>
              <ul className={styles.project__info__list}>
                <li>Unplash API를 이용해 API 사용 연습</li>
                <li>Recoil, React-Router 숙달</li>
                <li>React Toast Popup로 라이브러리 사용 연습</li>
                <li>Vercil배포로 프로젝트를 배포</li>
              </ul>
              <p className={styles.project__info__skills}>
                TypeScript, Recoil, React Toast Popup, Vercil, Axios
              </p>
            </div>
            <div className={styles.project__links}>
              <a href="https://react-album-nine.vercel.app/" target="_blank">
                사이트보기
              </a>
              <a href="https://github.com/KTH8962/react-album" target="_blank">
                소스보기
              </a>
            </div>
          </li>
          <li>
            <h3 className={styles.project__tit}>Dailygram</h3>
            <span className={styles.project__date}>
              2024. 11(1인 개인프로젝트)
            </span>
            <div className={styles.project__info}>
              <h4 className={styles.project__info__tit}>
                React를 이용한 간단한 SNS프로젝트
              </h4>
              <ul className={styles.project__info__list}>
                <li>국비지원에서 배운 간단한 React내용으로 프로젝트 제작</li>
                <li>useContext를 사용한 전역 상태 관리</li>
              </ul>
              <p className={styles.project__info__skills}>
                React, SCSS, JavaScript, express, multer
              </p>
            </div>
            <div className={styles.project__links}>
              <a href="https://github.com/KTH8962/sns-project" target="_blank">
                소스보기
              </a>
            </div>
          </li>
          <li>
            <h3 className={styles.project__tit}>Furnature</h3>
            <span className={styles.project__date}>
              2024. 09 ~ 2024 10(5인 팀프로젝트)
            </span>
            <div className={styles.project__info}>
              <h4 className={styles.project__info__tit}>
                국비지원 첫 팀프로젝트(쇼핑몰)
              </h4>
              <ul className={styles.project__info__list}>
                <li>국비지원의 첫 팀프로젝트인 가구판매 사이트</li>
                <li>팀장으로 팀프로젝트 리딩</li>
                <li>SpringBoot와 vue를 이용하여 사이트 제작</li>
                <li>퍼브링싱 경험을 살려 홈페이지 모든 디자인 및 효과 적용</li>
              </ul>
              <p className={styles.project__info__skills}>
                Vue(cdn), HTML, SCSS, JavaScript, Ajax,SpringBoot, MyBatis,
                OracleDB
              </p>
            </div>
            <div className={styles.project__links}>
              <a href="https://github.com/KTH8962/furnature" target="_blank">
                소스보기
              </a>
            </div>
          </li>
          <li>
            <h3 className={styles.project__tit}>
              포트폴리오 웹사이트(퍼블리셔)
            </h3>
            <span className={styles.project__date}>2020(1인 개인프로젝트)</span>
            <div className={styles.project__info}>
              <h4 className={styles.project__info__tit}>
                국비지원 수료 후 퍼블리셔 개인 프로젝트
              </h4>
              <ul className={styles.project__info__list}>
                <li>1번 사이트는 퍼블효과 적용 사이트</li>
                <li>2번 사이트는 첫 회사 재직 중 프로젝트</li>
              </ul>
              <p className={styles.project__info__skills}>
                HTML, SCSS, JavaScript, jQeury, AnyBuild
              </p>
            </div>
            <div className={styles.project__links}>
              <a href="http://kth89.dothome.co.kr/" target="_blank">
                사이트보기
              </a>
              <a href="http://kth898989.dothome.co.kr/" target="_blank">
                사이트보기
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project
