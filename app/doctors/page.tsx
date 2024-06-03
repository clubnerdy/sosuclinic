import { Metadata } from 'next';
import Styles from '@styles/pages/doctors.module.css';

export const metadata: Metadata = {
    title: "의료진 소개",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>

            <div className={Styles.section}>
                <div className="container">
                    <div className={Styles.header}>
                        <h1 className="title">의료진 소개</h1>
                    </div>

                    <div className={Styles.contents}>
                        <div className={Styles.visual}>
                            <img src="/images/layout/staff_1.png" alt="visual" />
                        </div>

                        <div className={Styles.info}>
                            <div className={Styles.hero}>
                                <div className={Styles.staff}>
                                    <span className={Styles.title}>박 소 현</span>
                                    <span className={Styles.caption}>대표원장</span>
                                </div>
                            </div>

                            <div className={Styles.list}>
                                <p className={Styles.item}>현 소수의원 대표원장</p>
                                <p className={Styles.item}>전 강남아이디의원 원장</p>
                                <p className={Styles.item}>전 지유의원 강남본점 원장</p>
                                <p className={Styles.item}>전 쁨의원 원장</p>
                            </div>

                            <div className={Styles.list}>
                                <p className={Styles.item}>멀츠코리아 울쎄라 공식 인증의</p>
                                <p className={Styles.item}>알마코리아 악센트프라임(튠) 키닥터</p>
                            </div>

                            <div className={Styles.list}>
                                <p className={Styles.item}>대한의사협회 인증 프로포폴진정 교육 프로그램 이수</p>
                                <p className={Styles.item}>대한미용성형레이저의학회 회원</p>
                                <p className={Styles.item}>대한리프팅연구회 회원</p>
                                <p className={Styles.item}>대한비만미용학회 회원</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </main>
    );
}