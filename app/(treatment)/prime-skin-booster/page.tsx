import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import BannerView from '@components/(layout)/bannerView';
import Design from '@components/(frame)/design';
import Step from '@components/(frame)/step';

export const metadata: Metadata = {
    title: "프라임 스킨 부스터",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/prime_skin_booster/main.png" alt="Thermage Flx" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Prime Skin Booster</h1>
                        <h2 className={Styles.visual__subtitle}>프라임 스킨 부스터</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">프라임 스킨 부스터란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 노하우가 담긴 스킨부스터 시술로, <br />
                            세밀한 진료와 피부진단기 분석 후 개인에 맞춤 레시피를 제공하여 최상의 효과를 내는 솔루션을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/prime_skin_booster/intro.png" alt="프라임 스킨 부스터란?" />
                    </div>
                </div>
            </section>

            <BannerView
                title="1:1 맞춤 스킨부스터 배합"
                image="/images/detail/prime_skin_booster/banner_1.png"
            >
                4가지 광원으로 피부를 촬영하여 객관적으로 피부 문제를 분석한 후 <br />
                1:1 맞춤 스킨부스터를 배합합니다.
                <br />
                <span className={Styles.banner__list}>
                    <span className={Styles.banner__item}>모공</span>
                    <span className={Styles.banner__item}>탄력</span>
                    <span className={Styles.banner__item}>광채</span>
                    <span className={Styles.banner__item}>수분</span>
                    <span className={Styles.banner__item}>재생</span>
                    <span className={Styles.banner__item}>미백</span>
                    <span className={Styles.banner__item}>
                        염증<br />
                        억제
                    </span>
                </span>
            </BannerView>

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_skin_booster/design_1.png"
                            title="리쥬란"
                        >
                            <strong className={Styles.design__strong}>재생,</strong> 염증억제, 탄력, 광채, 수분
                        </Design>

                        <Design
                            image="/images/detail/prime_skin_booster/design_2.png"
                            title="쥬베룩"
                        >
                            <strong className={Styles.design__strong}>모공, 탄력,</strong> 재생, 수분
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="엑소좀 ASCE+"
                        >
                            <strong className={Styles.design__strong}>염증억제,</strong> 재생
                        </Design>

                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="물광주사"
                        >
                            <strong className={Styles.design__strong}>수분,</strong> 광채
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="더모톡신"
                        >
                            <strong className={Styles.design__strong}>모공,</strong> 탄력
                        </Design>

                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="연어주사 PDRN"
                        >
                            <strong className={Styles.design__strong}>재생,</strong> 염증억제, 수분
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="NCTF 필로가"
                        >
                            <strong className={Styles.design__strong}>광채,</strong> 미백, 재생
                        </Design>

                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="아기주사 베네브"
                        >
                            <strong className={Styles.design__strong}>재생, 수분,</strong> 미백, 탄력
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_skin_booster/design_3.png"
                            title="레스틸렌 비탈 라이트"
                        >
                            <strong className={Styles.design__strong}>광채, 수분,</strong> 미백
                        </Design>
                    </div>
                </div>
            </section>

            <section className={Styles.step__section}>
                <div className="container">
                    <div className={Styles.step__header}>
                        <p className="title">맞춤 시술 방법 선택</p>
                        <p className={Styles.step__description}>
                            피부 컨디션과 스킨부스터의 종류, 개인의 일정 등을 고려하여 가장 효과적인 시술 방법을 선택합니다.
                        </p>
                    </div>

                    <div className={Styles.step__contents}>
                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/prime_skin_booster/step.png"
                            >
                                직접 주입
                            </Step>

                            <Step
                                image="/images/detail/prime_skin_booster/step.png"
                            >
                                초음파 흡수
                            </Step>
                            <Step
                                image="/images/detail/prime_skin_booster/step.png"
                            >
                                더마샤인
                            </Step>
                            <Step
                                image="/images/detail/prime_skin_booster/step.png"
                            >
                                mts
                            </Step>
                        </div>
                    </div>
                </div>
            </section>

            <BannerView
                title="흡수를 위한 후관리"
                image="/images/detail/prime_skin_booster/banner_2.png"
            >
                스킨부스터를 잘 침투 시키기 위한 후관리가 기본적으로 포함되어있습니다.
            </BannerView>
        </main>
    );
} 