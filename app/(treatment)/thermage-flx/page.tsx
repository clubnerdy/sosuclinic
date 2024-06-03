import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import BannerView from '@components/(layout)/bannerView';
import Design from '@components/(frame)/design';
import Pictogram from '@components/(frame)/pictogram';
import Step from '@components/(frame)/step';

export const metadata: Metadata = {
    title: "써마지 FLX",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/thermage_flx/main.png" alt="Thermage FLX" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Thermage FLX</h1>
                        <h2 className={Styles.visual__subtitle}>써마지 FLX</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">써마지 FLX란?</p>
                        <p className={Styles.intro__description}>
                            대표적인 프리미엄 안티에이징 시술로, 고주파 에너지를 진피층에 전달해 <br />
                            콜라겐 재생, 피부 탄력 및 주름 개선에 효과적인 시술입니다. <br />
                            소수의원의 써마지 FLX는 VIP룸에서 프라이빗하게 진행되며, <br />
                            9 step 프로그램을 통해 써마지 FLX의 효과를 극대화하면서도 <br />
                            환자분께 편안함을 드릴 수 있도록 세심히 고안되었습니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/thermage_flx/intro.png" alt="써마지 FLX란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.auth__section}>
                <div className="container">
                    <div className={Styles.auth__header}>
                        <p className="title">
                            솔타 메디칼 지정 써마지 공식 인증 의원
                        </p>
                        <p className={Styles.auth__description}>
                            소수의원은 정품 써마지 기계 와 정품 팁만을 사용합니다. <br />
                            팁 하나를 타인과 나눠서 사용하지 않습니다.
                        </p>
                    </div>

                    <div className={Styles.auth__contents}>
                        <div className={Styles.auth__image}>
                            <img src="/images/detail/thermage_flx/auth_1.png" alt="authorization" />
                        </div>

                        <div className={Styles.auth__image}>
                            <img src="/images/detail/thermage_flx/auth_2.png" alt="authorization" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">정확한 시술을 위한 4단계 디자인</p>
                        <p className={Styles.design__description}>
                            모든 얼굴이 같지 않기에 소수의원은 4단계에 걸쳐 개별 디자인합니다. <br />
                            같은 샷으로 더 우수한 효과를 낼 수 있을 뿐만 아니라 <br />
                            화상, 꺼짐 등의 부작용을 현저히 줄일 수 있습니다.
                        </p>
                    </div>

                    <div className={Styles.design__contents}>
                        <Design
                            image="/images/detail/thermage_flx/design_1.png"
                            title="1단계"
                        >
                            3D 얼굴 촬영 장비 메타뷰로 얼굴 분석
                        </Design>

                        <Design
                            image="/images/detail/thermage_flx/design_2.png"
                            title="2단계"
                        >
                            원장 1:1 상담 후 써마지 디자인지 작성
                        </Design>

                        <Design
                            image="/images/detail/thermage_flx/design_3.png"
                            title="3단계"
                        >
                            마킹 페이퍼로 시술 부위 표시
                        </Design>

                        <Design
                            image="/images/detail/thermage_flx/design_4.png"
                            title="4단계"
                        >
                            얼굴에 디자인 펜으로 시술 벡터 표시
                        </Design>
                    </div>
                </div>
            </section>

            <BannerView
                title="시술 효과 극대화를 위한 전후 관리"
                image="/images/detail/thermage_flx/banner_2.png"
            >
                써마지 효과를 극대화 하기 위해 프로그램에 전후 관리가 포함되어있습니다.
            </BannerView>

            <section className={Styles.pictogram__section}>
                <div className="container">
                    <div className={Styles.pictogram__header}>
                        <p className="title">통증 최소화를 위한 마취 시스템 4가지</p>
                        <p className={Styles.pictogram__description}>
                            개인의 통증 민감도와 상황이 다르기 때문에 통증을 최소화할 다양한 마취방법을 제공합니다. <br />
                            안전한 수면 마취를 위해 프로포폴 진정 프로그램 이수한 의료진이 상주합니다.
                        </p>
                    </div>

                    <div className={Styles.pictogram__contents}>
                        <div className={Styles.pictogram__list}>
                            <Pictogram title="01." image="/images/detail/thermage_flx/pictogram_1.svg">
                                연고 마취
                            </Pictogram>
                            <Pictogram title="02." image="/images/detail/thermage_flx/pictogram_2.svg">
                                통증 완화 수액
                            </Pictogram>
                            <Pictogram title="03." image="/images/detail/thermage_flx/pictogram_3.svg">
                                국소 마취
                            </Pictogram>
                            <Pictogram title="04." image="/images/detail/thermage_flx/pictogram_4.svg">
                                수면 마취
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>

            <section className={Styles.step__section}>
                <div className="container">
                    <div className={Styles.step__header}>
                        <p className="title">써마지 FLX의 9step 프로그램</p>
                    </div>

                    <div className={Styles.step__contents}>
                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 1"
                            >
                                3D 얼굴 촬영 장비<br />
                                메타뷰 얼굴 분석
                            </Step>

                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 2"
                            >
                                1:1 원장 상담 및<br />
                                마취 방법 선택
                            </Step>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 3"
                            >
                                3D 얼굴 분석을 바탕으로<br />
                                디자인지 작성
                            </Step>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 4"
                            >
                                써마지 FLX<br />
                                시술 전 케어
                            </Step>
                        </div>

                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 5"
                            >
                                마킹 페이퍼로<br />
                                시술 부위 표시
                            </Step>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 6"
                            >
                                얼굴에 디자인 펜으로<br />
                                시술 벡터 표시
                            </Step>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 7"
                            >
                                정교한<br />
                                써마지 FLX 리프팅
                            </Step>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 8"
                            >
                                써마지 FLX<br />
                                시술 후 케어
                            </Step>
                            <Step
                                image="/images/detail/thermage_flx/step.png"
                                title="Step 9"
                            >
                                써마지<br />
                                정품 인증
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
                            <Pictogram title="01." image="/images/detail/thermage_flx/pictogram_5.svg">
                                피부가 얇고<br />
                                탄력이 떨어진 분
                            </Pictogram>
                            <Pictogram title="02." image="/images/detail/thermage_flx/pictogram_6.svg">
                                자연스러운 리프팅<br />
                                효과를 원하시는 분
                            </Pictogram>
                            <Pictogram title="03." image="/images/detail/thermage_flx/pictogram_7.svg">
                                울퉁불퉁한<br />
                                얼굴라인이<br />
                                걱정이신 분
                            </Pictogram>
                            <Pictogram title="04." image="/images/detail/thermage_flx/pictogram_8.svg">
                                피부가<br />
                                늘어지신 분
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 