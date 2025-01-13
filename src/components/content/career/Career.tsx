import { useEffect } from "react"
import styles from "./Career.module.scss"
import { useSetRecoilState } from "recoil"
import { classState } from "@/store/atoms/classState"

function Career() {
  const setClassName = useSetRecoilState<Array<string>>(classState)
  useEffect(() => {
    setClassName((prevClassName) => [...prevClassName, styles.career])
  }, [setClassName])
  return (
    <div className={`${styles.content} ${styles.career}`}>
      <h2 className={styles.content__tit}>Career</h2>
      <div className={styles.career__wrap}>
        <ul className={styles.career__list}>
          <li>
            <div className={styles.career__imgBox}>
              <p className={`${styles.career__imgBox__item} ${styles.mtis}`}>
                mtis corperation logo
              </p>
            </div>
            <div className={styles.career__infoBox}>
              <h3 className={styles.career__infoBox__tit}>엠티스코퍼레이션</h3>
              <p className={styles.career__infoBox__date}>
                2023. 03 ~ 2024. 03
              </p>
              <p className={styles.career__infoBox__desc}>
                엠티스코퍼레이션은 라이다 센서를 이용하여 사람과 사물을
                감지하며, <br /> 이 센서를 이용해 감시 센터 및 자율 주행 로봇과
                스마트 오더를 생산하는 회사입니다.
              </p>
              <div className={styles.career__infoBox__items}>
                <span className={styles.career__infoBox__items__item}>
                  퍼블리싱
                </span>
              </div>
              <div className={styles.career__infoBox__info}>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    로이, 록시 웹 + 컨트롤 앱
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>
                      록시(실내 서빙로봇) 대시보드 및 컨트롤위 한 앱(하이브리드)
                      퍼블리싱
                    </li>
                    <li>
                      로이(실외 서빙로봇) 대시보드 및 컨트롤위 한 앱(하이브리드)
                      퍼블리싱
                    </li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    종로구 익선동 인구밀도 대시보드
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>
                      이태원 사고 후 인구 밀집의 위험성을 대비하기 위한 인구
                      밀집 대시보드
                    </li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    계열사 아이드로 웹사이트
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>계열사 아이드로 웹 사이트 퍼블리싱</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.career__imgBox}>
              <p className={`${styles.career__imgBox__item} ${styles.radcns}`}>
                RADCNS logo
              </p>
            </div>
            <div className={styles.career__infoBox}>
              <h3 className={styles.career__infoBox__tit}>라드씨엔에스</h3>
              <p className={styles.career__infoBox__date}>
                2022. 02 ~ 2023. 03
              </p>
              <p className={styles.career__infoBox__desc}>
                라드씨엔에스는 이랜드의 계열사에서 분리 된 에이전시이며, <br />
                기존 이랜드의 사이트 관리와 CJ 등 외부 업체와 작업을 진행하는
                회사입니다.
              </p>
              <div className={styles.career__infoBox__items}>
                <span className={styles.career__infoBox__items__item}>
                  퍼블리싱
                </span>
              </div>
              <div className={styles.career__infoBox__info}>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    이랜드몰 관련 모든 쇼핑몰 컴포넌트화
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>
                      이랜드몰에서 이용하는 모든 쇼핑몰(이랜드몰, 킴스클럽,
                      스파오 등)을 리팩토링을 위한 컴포넌트화
                    </li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    이랜드 윤리경영 웹, 앱사이트(적응형)
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>
                      이랜드 윤리경영 사이트 리뉴얼을 위한 적응형 사이트 제작
                    </li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    대림미술관 유지보수
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>대림 미술관 사이트 유지보수(Vue.js)</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.career__imgBox}>
              <p className={`${styles.career__imgBox__item} ${styles.tpb}`}>
                THE POWER BRAINS logo
              </p>
            </div>
            <div className={styles.career__infoBox}>
              <h3 className={styles.career__infoBox__tit}>더파워브레인스</h3>
              <p className={styles.career__infoBox__date}>2020.06 ~ 2022.01</p>
              <p className={styles.career__infoBox__desc}>
                더파워브레인스는 자체 솔루션 프로그램과 동물 전용 웨어러블
                장비를 이용하여 <br />
                동물의 상태를 확인하고 EMR, 대시보드등 확인가능한 페이지를
                제공하는 회사입니다.
              </p>
              <div className={styles.career__infoBox__items}>
                <span className={styles.career__infoBox__items__item}>
                  퍼블리싱
                </span>
              </div>
              <div className={styles.career__infoBox__info}>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    한국 마사회 차세대 말병원 EMR
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>마사회 말전용 EMR의 화면 구축</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>삼성 SMPOP</h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>
                      삼성 전세계 지법인에게 행사상품 제공 BtoB 쇼핑몰 제작
                    </li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    NH농협 손해보험 질병치료보험 EMR
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>수의사를 위한 질병 앱(하이브리드) 퍼블리싱</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    NIA 데이터플래그십 사업
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>제주마의 혈통보존을 위한 마방의 상황 체크 EMR</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    더파워브레인스 웹사이트
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>
                      더파워브레인스 사이트 리뉴얼을 위한 적응형 사이트 제작
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.career__imgBox}>
              <p className={`${styles.career__imgBox__item} ${styles.mandoo}`}>
                MANDOO COMMNICATION logo
              </p>
            </div>
            <div className={styles.career__infoBox}>
              <h3 className={styles.career__infoBox__tit}>만두커뮤니케이션</h3>
              <p className={styles.career__infoBox__date}>
                2018. 07 ~ 2019. 04
              </p>
              <p className={styles.career__infoBox__desc}>
                만두커뮤니케이션은 렌탈 홈페이지와 구축 홈페이지로
                나누어져있으며, <br />
                고객들에게 부담되지 않은 가격으로 홈페이지를 제공하는
                회사입니다.
              </p>
              <div className={styles.career__infoBox__items}>
                <span className={styles.career__infoBox__items__item}>
                  퍼블리싱
                </span>
              </div>
              <div className={styles.career__infoBox__info}>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>MBC 아카데미</h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>MBC 아카데미 반응형 웹사이트 제작</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>해동조구사</h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>해동조구사 반응형 웹사이트 제작</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>헵시바</h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>헵시바 반응형 웹사이트 제작</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    BICS 국제학교
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>BICS 국제학교 반응형 웹사이트 제작</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>JWPR</h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>JWPR 반응형 웹사이트 제작</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>끌레</h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>끌레 반응형 웹사이트 제작</li>
                  </ul>
                </div>
                <div className={styles.career__infoBox__info__box}>
                  <h4 className={styles.career__infoBox__stit}>
                    예인 뷰티 인스티튜드
                  </h4>
                  <ul className={styles.career__infoBox__list}>
                    <li>예인 뷰티 인스티튜드 반응형 웹사이트 제작</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Career
