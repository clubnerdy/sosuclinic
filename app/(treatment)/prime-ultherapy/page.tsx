import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import BannerView from '@components/(layout)/bannerView';
import Design from '@components/(frame)/design';
import Pictogram from '@components/(frame)/pictogram';
import Step from '@components/(frame)/step';

export const metadata: Metadata = {
    title: "프라임 울쎄라",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/prime_ultherapy/main.png" alt="Prime Ultherapy" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Prime Ultherapy</h1>
                        <h2 className={Styles.visual__subtitle}>프라임 울쎄라</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">프라임 울쎄라란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 프라임 울쎄라는 강력한 리프팅 효과를 위한 울쎄라 프로그램입니다. <br />
                            프라임 울쎄라는 VIP룸에서 프라이빗하게 진행되며, 9 step 프로그램을 통해 울쎄라의 효과를 극대화하면서도 <br />
                            환자분께 편안함을 드릴 수 있도록 세심히 고안되었습니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/prime_ultherapy/intro.png" alt="프라임 울쎄라란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.auth__section}>
                <div className="container">
                    <div className={Styles.auth__header}>
                        <p className="title">
                            멀츠 코리아 지정 울쎄라 공식 의원<br />
                            멀츠 코리아 지정 울쎄라 공식 의사
                        </p>
                        <p className={Styles.auth__description}>
                            소수의원은 정품 울쎄라 기계와 정품 팁만을 사용합니다. <br />
                            멀츠코리아 지정 울쎄라 인증 의사가 개별 맞춤 시술을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.auth__contents}>
                        <div className={Styles.auth__image}>
                            <img src="/images/detail/prime_ultherapy/auth_1.png" alt="authorization" />
                        </div>

                        <div className={Styles.auth__image}>
                            <img src="/images/detail/prime_ultherapy/auth_2.png" alt="authorization" />
                        </div>
                    </div>
                </div>
            </section>

            <BannerView
                title="하루 소수의 인원에게만 진행되는 울쎄라"
                image="/images/detail/prime_ultherapy/banner_1.png"
            >
                소수의원은 최상의 컨디션에서 완벽한 시술을 위해 부득이하게 소수 인원만 예약 받고 있습니다.
            </BannerView>

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">정확한 시술을 위한 4단계 디자인</p>
                        <p className={Styles.design__description}>
                            모든 얼굴이 같지 않기에 소수의원은 4단계에 걸쳐 개별 디자인합니다. <br />
                            볼패임, 비대칭 부작용을 현저히 줄일 수 있습니다.
                        </p>
                    </div>

                    <div className={Styles.design__contents}>
                        <Design
                            image="/images/detail/prime_ultherapy/design_1.png"
                            title="1단계"
                        >
                            3D 얼굴 촬영 장비 메타뷰로 얼굴 분석
                        </Design>

                        <Design
                            image="/images/detail/prime_ultherapy/design_2.png"
                            title="2단계"
                        >
                            원장 1:1 상담 후 프라임 울쎄라 디자인지 작성
                        </Design>

                        <Design
                            image="/images/detail/prime_ultherapy/design_3.png"
                            title="3단계"
                        >
                            얼굴에 직접 시술할 부위 펜으로 디자인
                        </Design>

                        <Design
                            image="/images/detail/prime_ultherapy/design_4.png"
                            title="4단계"
                        >
                            초음파로 피부 내 조직을 보며 디자인 점검
                        </Design>
                    </div>
                </div>
            </section>

            <BannerView
                title="시술 효과 극대화를 위한 전후 관리"
                image="/images/detail/prime_ultherapy/banner_2.png"
            >
                울쎄라 효과를 극대화하기 위해 프라임 울쎄라 프로그램에 전후 관리가 포함되어 있습니다.
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
                            <Pictogram title="01." image="/images/detail/prime_ultherapy/pictogram_1.svg">
                                연고 마취
                            </Pictogram>
                            <Pictogram title="02." image="/images/detail/prime_ultherapy/pictogram_2.svg">
                                통증 완화 수액
                            </Pictogram>
                            <Pictogram title="03." image="/images/detail/prime_ultherapy/pictogram_3.svg">
                                국소 마취
                            </Pictogram>
                            <Pictogram title="04." image="/images/detail/prime_ultherapy/pictogram_4.svg">
                                수면 마취
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>

            <section className={Styles.step__section}>
                <div className="container">
                    <div className={Styles.step__header}>
                        <p className="title">프라임 울쎄라의 9step 프로그램</p>
                    </div>

                    <div className={Styles.step__contents}>
                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 1"
                            >
                                3D 얼굴 촬영 장비<br />
                                메타뷰 얼굴 분석
                            </Step>

                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 2"
                            >
                                1:1 원장 상담 및<br />
                                마취 방법 선택
                            </Step>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 3"
                            >
                                3D 얼굴 분석을 바탕으로<br />
                                프라임 디자인지 작성
                            </Step>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 4"
                            >
                                프라임 울쎄라<br />
                                시술 전 케어
                            </Step>
                        </div>

                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 5"
                            >
                                시술할 부위를<br />
                                얼굴에 직접 디자인
                            </Step>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 6"
                            >
                                초음파로 피부 내 조직을<br />
                                보며 마지막 디자인 점검
                            </Step>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 7"
                            >
                                정교한<br />
                                프라임 울쎄라 리프팅
                            </Step>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 8"
                            >
                                프라임 울쎄라<br />
                                시술 후 케어
                            </Step>
                            <Step
                                image="/images/detail/prime_ultherapy/step.png"
                                title="Step 9"
                            >
                                울쎄라 정품 인증
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
                            <Pictogram title="01." image="/images/detail/prime_ultherapy/pictogram_4.svg">
                                이중턱과 심부볼로<br />
                                고민이신 분
                            </Pictogram>
                            <Pictogram title="02." image="/images/detail/prime_ultherapy/pictogram_5.svg">
                                노화로 인한 탄력<br />
                                저하가 고민이신 분
                            </Pictogram>
                            <Pictogram title="03." image="/images/detail/prime_ultherapy/pictogram_6.svg">
                                속에서 당겨지는<br />
                                리프팅을 원하시는 분
                            </Pictogram>
                            <Pictogram title="04." image="/images/detail/prime_ultherapy/pictogram_7.svg">
                                수술을 부담스럽지만<br />
                                강력한 리프팅을<br />
                                원하시는 분
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 