import Styles from '@styles/components/footer.module.css';
import Link from 'next/link';

export default function Footer() {

    return (
        <footer className={Styles.footer}>
            <div className="container">
                <div className={Styles.contents}>
                    <div className={Styles.left}>
                        <div className={Styles.logo}>
                            <img src="/icons/sosu_symbol.svg" alt="sosu_symbol" />
                            <img src="/icons/sosu_wordmark.svg" alt="sosu_wordmark" />
                        </div>

                        <div className={Styles.menu}>
                            <Link href="http://pf.kakao.com/_ItxhJG" target="_blank" className={Styles.text__content}>카카오톡</Link>
                            <div className={Styles.line__vectical}></div>
                            <Link href="https://booking.naver.com/booking/13/bizes/1129314/items/5822033/" target="_blank" className={Styles.text__content}>네이버 예약</Link>
                            <div className={Styles.line__vectical}></div>
                            <Link href="https://www.instagram.com/sosuclinic/" target="_blank" className={Styles.text__content}>인스타그램</Link>
                        </div>
                    </div>

                    <div className={Styles.separator}></div>

                    <div className={Styles.center}>
                        <img src="/icons/sosu_wordmark_inline.svg" alt="sosu_wordmark_inline" />
                        <h6 className={Styles.text__title}>소수의원</h6>
                        <p className={Styles.text__description}>
                            상호명 : 소수의원<br />
                            대표 : 박소현<br />
                            도로명 주소 : 서울시 성동구 상원1길 5 3층 (연무장길 초입)<br />
                            우편번호 : 04779<br />
                            예약문의 :  02-3409-1207<br />
                            Email : sosuclinic@gmail.com<br />
                            Fax : 02-3409-1270
                        </p>
                        <div className={Styles.docs}>
                            <Link href="/terms" className={Styles.docs__item}>이용약관</Link>
                            <Link href="/un-support" className={Styles.docs__item}>비급여항목</Link>
                        </div>
                    </div>

                    <div className={Styles.separator}></div>

                    <div className={Styles.right}>
                        <div className={Styles.info}>
                            <span className={Styles.docs__item}>진료시간</span>
                            <p className={Styles.text__description}>
                                월.화.수.금 : 11:00-21:00 <br />
                                토요일 : 11:00-17:00 <br />
                                목요일 변동, 영업시간 참조 바랍니다. <br />
                                일요일 및 공휴일 휴무
                            </p>
                        </div>

                        <div className={Styles.info}>
                            <span className={Styles.docs__item}>사업자등록번호</span>
                            <p className={Styles.text__description}>
                                175-18-02364
                            </p>
                        </div>

                        <div className={Styles.info}>
                            <span className={Styles.docs__item}>개인정보관리자</span>
                            <p className={Styles.text__description}>
                                박소현
                            </p>
                        </div>
                    </div>
                </div>

                <div className={Styles.copyright}>
                    <div className={Styles.line}></div>
                    <div className={Styles.copyright__text}>2024 Sosu Clinic. All Rights Reserved</div>
                    <div className={Styles.line}></div>
                </div>
            </div>
        </footer>
    )
}