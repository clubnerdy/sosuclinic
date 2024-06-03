import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import BannerView from '@components/(layout)/bannerView';
import Design from '@components/(frame)/design';
import Pictogram from '@components/(frame)/pictogram';
import Step from '@components/(frame)/step';

export const metadata: Metadata = {
    title: "프라임 튠페이스",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/prime_tuneface/main.png" alt="Prime Tuneface" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Prime Tuneface</h1>
                        <h2 className={Styles.visual__subtitle}>프라임 튠페이스</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">프라임 튠페이스란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 프라임 튠은 개인 맞춤에 특화된 리프팅입니다. <br />
                            꺼짐, 쳐짐, 잔주름, 피부 두께 및 볼륨. 개인 특성에 따라 맞춤 디자인과 핸드피스로 <br />
                            최고의 효과를 위해 최적의 에너지 피부층에 정밀하게 타겟하여 전달합니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img style={{ maxWidth: 820 }} src="/images/detail/prime_tuneface/intro.png" alt="프라임 튠페이스란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.auth__section}>
                <div className="container">
                    <div className={Styles.auth__header}>
                        <p className="title">
                            알마 코리아 지정 튠(악센트 프라임) 공식 인증 의원<br />
                            알마 코리아 지정 튠(악센트 프라임) 키닥터
                        </p>
                        <p className={Styles.auth__description}>
                            소수의원은 알마 코리아 지정 튠 전문 의원입니다. <br />
                            전문성을 인증받은 키닥터가 개별 맞춤 시술을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.auth__list}>
                        <div className={Styles.auth__image}>
                            <img src="/images/detail/prime_tuneface/auth_1.png" alt="authorization" />
                        </div>
                    </div>
                </div>
            </section>

            <BannerView
                title="튠 플래닝"
                image="/images/detail/prime_tuneface/banner_1.png"
            />

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">정확한 시술을 위한 4단계 디자인</p>
                        <p className={Styles.design__description}>
                            튠 핸드피스는 작용하는 층과 효과가 모두 다릅니다. <br />
                            최적의 층과 에너지를 찾아 분배하고 최상의 결과를 위한 시술을 제안합니다.
                        </p>
                    </div>

                    <div className={Styles.design__contents}>
                        <Design
                            image="/images/detail/prime_tuneface/design_1.png"
                            title="1단계"
                        >
                            3D 얼굴 촬영 장비 메타뷰로 얼굴 분석
                        </Design>

                        <Design
                            image="/images/detail/prime_tuneface/design_2.png"
                            title="2단계"
                        >
                            원장 1:1 상담 후 최적의 에너지 및 피부층 진단
                        </Design>

                        <Design
                            image="/images/detail/prime_tuneface/design_3.png"
                            title="3단계"
                        >
                            핸드피스 선택
                        </Design>

                        <Design
                            image="/images/detail/prime_tuneface/design_4.png"
                            title="4단계"
                        >
                            튠 디자인지 작성
                        </Design>
                    </div>
                </div>
            </section>

            <BannerView
                title="시술 효과 극대화를 위한 전후 관리"
                image="/images/detail/prime_tuneface/banner_2.png"
            >
                튠 효과를 극대화 하기 위해 프라임튠 프로그램에 전후 관리가 포함되어있습니다.
            </BannerView>

            <section className={Styles.step__section}>
                <div className="container">
                    <div className={Styles.step__header}>
                        <p className="title">프라임 튠의 7스텝 프로그램</p>
                    </div>

                    <div className={Styles.step__contents}>
                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 1"
                            >
                                3D 얼굴 촬영 장비<br />
                                메타뷰 얼굴 분석
                            </Step>

                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 2"
                            >
                                1:1 원장 상담 및<br />
                                최적의 에너지 및 피부층<br />
                                진단 후 튠 핸드피스 선택
                            </Step>
                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 3"
                            >
                                튠 디자인지 작성
                            </Step>
                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 4"
                            >
                                튠 시술 전 케어
                            </Step>
                        </div>

                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 5"
                            >
                                다양한 핸드피스를 이용한<br />
                                맞춤 튠 리프팅
                            </Step>
                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 6"
                            >
                                튠 시술 후 케어
                            </Step>
                            <Step
                                image="/images/detail/prime_tuneface/step.png"
                                title="Step 7"
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
                            <Pictogram title="01." image="/images/detail/prime_tuneface/pictogram_1.svg">
                                섬세한 개별 맞춤<br />
                                리프팅을 받고 싶으신 분
                            </Pictogram>
                            <Pictogram title="02." image="/images/detail/prime_tuneface/pictogram_2.svg">
                                통증 없는 리프팅을<br />
                                원하시는 분
                            </Pictogram>
                            <Pictogram title="03." image="/images/detail/prime_tuneface/pictogram_3.svg">
                                즉각적인 리프팅 효과를<br />
                                원하시는 분
                            </Pictogram>
                            <Pictogram title="04." image="/images/detail/prime_tuneface/pictogram_4.svg">
                                잔주름 개선 및 피부결<br />
                                개선을 원하시는 분
                            </Pictogram>
                        </div>
                        <div className={Styles.pictogram__list}>
                            <Pictogram title="05." image="/images/detail/prime_tuneface/pictogram_5.svg">
                                지방이 적어 리프팅 후<br />
                                꺼짐이 염려되시는 분
                            </Pictogram>
                            <Pictogram title="06." image="/images/detail/prime_tuneface/pictogram_6.svg">
                                볼륨<br />
                                (이중턱, 심부볼,<br />
                                팔자윗살, 광대)의<br />
                                감소를 원하시는 분
                            </Pictogram>
                            <Pictogram title="07." image="/images/detail/prime_tuneface/pictogram_7.svg">
                                탄력이 고민이신 분
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 