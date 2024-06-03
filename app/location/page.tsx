import { Metadata } from 'next';
import Link from 'next/link';
import Styles from '@styles/pages/location.module.css';
import Button from '@components/(frame)/button';

export const metadata: Metadata = {
    title: "오시는 길",
};

export default function page(): JSX.Element {
    return (
        <main className={Styles.main}>
            <div className={Styles.section}>
                <div className="container">
                    <div className={Styles.header}>
                        <span className="title">오시는 길</span>
                    </div>

                    <div className={Styles.visual}>

                        {/* 지도 이미지 네이버API로 변경=>
                            1. 이미지 삭제
                            2. 네이버 연결 링크 삭제 */}
                        <img src="/images/layout/location.png" alt="location" />

                        <Link href="https://map.naver.com/p/entry/place/1284629888?placePath=%2Fhome&c=15.00,0,0,0,dh" target="_blank" className={Styles.link}>
                            <Button title="네이버 지도로 보기" theme="warmgrey" />
                        </Link>

                        {/* 네이버 지도 API 삽입 */}

                    </div>

                    <div className={Styles.contents}>
                        <div className={Styles.info}>
                            <div className={Styles.subtitle}>오시는 길</div>

                            <div className={Styles.list}>
                                <div className={Styles.item}>
                                    <span className={Styles.quote}>주소</span>
                                    <span className={Styles.description}>서울시 성동구 상원1길 5 3층 (연무장길 초입)</span>
                                </div>

                                <div className={Styles.item}>
                                    <span className={Styles.quote}>주차</span>
                                    <span className={Styles.description}>
                                        소수의원 건물 뒤 <br />
                                        경동빌딩 주차장 이용 가능합니다. <br />
                                        만차시 굿타워 주차장(성동구 상원 11길 제 2주차장)을 이용해주세요.
                                    </span>
                                </div>

                                <div className={Styles.item}>
                                    <span className={Styles.quote}>지하철</span>
                                    <span className={Styles.description}>2호선 뚝섬역, 수인분당선 서울숲역</span>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.helper}>
                            <div className={Styles.subtitle}>상담 & 문의</div>

                            <p className={Styles.tel}>02.3409.1207</p>
                        </div>

                        <div className={Styles.info}>
                            <div className={Styles.subtitle}>진료 시간</div>

                            <div className={Styles.list}>
                                <div className={Styles.item}>
                                    <span className={Styles.quote}>월. 화. 수. 금</span>
                                    <span className={Styles.description}>11:00 - 21:00</span>
                                </div>

                                <div className={Styles.item}>
                                    <span className={Styles.quote}>토</span>
                                    <span className={Styles.description}>11:00 - 17:00</span>
                                </div>

                                <div className={Styles.item}>
                                    <span className={Styles.quote}>휴무일</span>
                                    <span className={Styles.description}>목요일 변동, 영업시간 참조 바랍니다.</span>
                                </div>

                                <Link href="/schedule" className={Styles.button}>이달의 진료 일정 바로가기</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </main>
    );
}