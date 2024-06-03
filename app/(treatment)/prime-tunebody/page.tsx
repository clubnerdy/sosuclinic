import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import Design from '@components/(frame)/design';
import Pictogram from '@components/(frame)/pictogram';
import Step from '@components/(frame)/step';
import BannerView from '@components/(layout)/bannerView';

export const metadata: Metadata = {
    title: "프라임 튠바디",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/prime_tunebody/main.png" alt="Thermage Flx" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Prime Tunebody</h1>
                        <h2 className={Styles.visual__subtitle}>프라임 튠바디</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">프라임 튠바디란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 프라임 튠바디는 3D 입체 초음파 및 고주파를 이용하여 <br />
                            선택적으로 지방을 파괴하고 셀룰라이트를 효과적으로 개선하는 시술입니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/prime_tunebody/intro.png" alt="프라임 튠바디란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.auth__section}>
                <div className="container">
                    <div className={Styles.auth__header}>
                        <p className="title">
                            알마 코리아 지정 튠(악센트 프라임) 공식 인증 의원 <br />
                            알마 코리아 지정 튠(악센트 프라임) 키닥터
                        </p>
                        <p className={Styles.auth__description}>
                            소수의원은 알마 코리아 지정 튠 전문 의원입니다. <br />
                            전문성을 인증받은 키닥터가 개별 맞춤 시술을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.auth__contents}>
                        <div className={Styles.auth__image}>
                            <img src="/images/detail/prime_tunebody/auth_1.png" alt="authorization" />
                        </div>

                        <div className={Styles.auth__image}>
                            <img src="/images/detail/prime_tunebody/auth_2.png" alt="authorization" />
                        </div>
                    </div>
                </div>
            </section>

            <BannerView
                title="바디 튠 플래닝"
                image="/images/detail/prime_tunebody/banner_1.png"
            >
                부위별 근육양, 지방양, 셀룰라이트, 부종, 탄력저하 <br />
                등을 측정하여 문제점을 파악합니다 .<br />
                시술 부위 : 승모근, 팔뚝, 복부, 엉덩이, 허벅지, 종아리, 무릎, 발목
            </BannerView>

            <BannerView
                title="최적의 핸드피스와 에너지 선택"
                image="/images/detail/prime_tunebody/banner_2.png"
            >
                부위 별로 알맞은 핸드피스를 사용하여 최상의 결과를 위한 시술을 제안합니다.
            </BannerView>

            <BannerView
                title="다양한 병합 시술"
                image="/images/detail/prime_tunebody/banner_3.png"
            >
                HIFU, 바디 보톡스, 지방 분해주사, 바디 LDM 등 최적의 효과를 위한 병합시술을 제안합니다.
            </BannerView>

            <section className={Styles.step__section}>
                <div className="container">
                    <div className={Styles.step__header}>
                        <p className="title">프라임 튠의 5스텝 프로그램</p>
                    </div>

                    <div className={Styles.step__contents}>
                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/prime_tunebody/step.png"
                                title="Step 1"
                            >
                                1:1 원장 상담<br />
                                : 고민 부위 확인 및<br />
                                바디 리포트 작성
                            </Step>

                            <Step
                                image="/images/detail/prime_tunebody/step.png"
                                title="Step 2"
                            >
                                최적의튠 핸드피스 선택<br />
                                및 병합 시술 제안
                            </Step>
                            <Step
                                image="/images/detail/prime_tunebody/step.png"
                                title="Step 3"
                            >
                                다양한 핸드피스를 이용
                                한 맞춤 튠 리프팅
                            </Step>
                            <Step
                                image="/images/detail/prime_tunebody/step.png"
                                title="Step 4"
                            >
                                최적의 병합 시술 진행
                            </Step>
                            <Step
                                image="/images/detail/prime_tunebody/step.png"
                                title="Step 5"
                            >
                                튠 정품 인증서 발급
                            </Step>
                        </div>
                    </div>
                </div>
            </section>

            <section className={Styles.pictogram__section}>
                <div className="container">
                    <div className={Styles.pictogram__header}>
                        <p className="title">이런 분들께 추천합니다</p>
                        <p className={Styles.pictogram__description}></p>
                    </div>

                    <div className={Styles.pictogram__contents}>
                        <div className={Styles.pictogram__list}>
                            <Pictogram title="01." image="/images/detail/prime_tunebody/pictogram_1.svg">
                                승모근 보톡스 시술<br />
                                을 했으나 데콜테<br />
                                라인 개선 효과가<br />
                                미미하신 분
                            </Pictogram>
                            <Pictogram title="02." image="/images/detail/prime_tunebody/pictogram_2.svg">
                                전체적으로 체중이<br />
                                적게 나가나 특정<br />
                                부위에만 지방 라인이<br />
                                신경쓰이시는 분
                            </Pictogram>
                            <Pictogram title="03." image="/images/detail/prime_tunebody/pictogram_3.svg">
                                출산 후 복부 탄력이<br />
                                떨어지신 분
                            </Pictogram>
                            <Pictogram title="04." image="/images/detail/prime_tunebody/pictogram_4.svg">
                                수술 후 유착 및<br />
                                피부 늘어짐이 있으신 분
                            </Pictogram>
                        </div>
                        <div className={Styles.pictogram__list}>
                            <Pictogram title="05." image="/images/detail/prime_tunebody/pictogram_5.svg">
                                엉덩이 탄력이<br />
                                신경쓰이시는 분
                            </Pictogram>
                            <Pictogram title="06." image="/images/detail/prime_tunebody/pictogram_6.svg">
                                종아리 셀룰라이트<br />
                                및 부종이 있으신 분
                            </Pictogram>
                            <Pictogram title="07." image="/images/detail/prime_tunebody/pictogram_7.svg">
                                발목, 무릎 윗 살 등<br />
                                특정부위 지방이<br />
                                신경쓰이시는 분
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 