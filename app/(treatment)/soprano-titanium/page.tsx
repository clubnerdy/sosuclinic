import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import BannerView from '@components/(layout)/bannerView';
import Design from '@components/(frame)/design';
import Pictogram from '@components/(frame)/pictogram';
import Step from '@components/(frame)/step';

export const metadata: Metadata = {
    title: "소프라노 티타늄",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/soprano_titanium/main.png" alt="Soprano Titanium" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Soprano Titanium</h1>
                        <h2 className={Styles.visual__subtitle}>소프라노 티타늄</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">소프라노 티타늄이란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 소프라노 티타늄은 즉각적인 효과가 나오는 차세대 리프팅 시술입니다. <br />
                            리프팅, 타이트닝, 브라이트닝 세가지 효과가 동시에 나타나며 다운타임이 없다는 장점이 있습니다. <br />
                            중요한 날을 앞두고 자연스럽고 빠른 개선을 원하시는 분들에게 적합한 리프팅 시술입니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/soprano_titanium/intro.png" alt="소프라노 티타늄란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.auth__section}>
                <div className="container">
                    <div className={Styles.auth__header}>
                        <p className="title">
                            알마 코리아 지정 소프라노 티타늄 공식 인증 의원<br />
                            알마 코리아 지정 소프라노 티타늄 키닥터
                        </p>
                        <p className={Styles.auth__description}>
                            소수의원은 알마 코리아 지정 소프라노 티타늄 전문 의원입니다. <br />
                            전문성을 인증받은 키닥터가 개별 맞춤 시술을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.auth__contents}>
                        <div className={Styles.auth__image}>
                            <img src="/images/detail/soprano_titanium/auth_1.png" alt="authorization" />
                        </div>

                        <div className={Styles.auth__image}>
                            <img src="/images/detail/soprano_titanium/auth_2.png" alt="authorization" />
                        </div>
                    </div>
                </div>
            </section>

            <BannerView
                title="소프라노 티타늄 플래닝"
                image="/images/detail/soprano_titanium/banner_1.png"
            />

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">정확한 시술을 위한 4단계 디자인</p>
                        <p className={Styles.design__description}>
                            소프라노 티타늄 리프팅은 모드에 따라 작용하는 층과 효과가 모두 다릅니다. <br />
                            최적의 층과 에너지를 찾아 분배하고 최상의 결과를 위한 시술을 제안합니다.
                        </p>
                    </div>

                    <div className={Styles.design__contents}>
                        <Design
                            image="/images/detail/soprano_titanium/design_1.png"
                            title="1단계"
                        >
                            3D 얼굴 촬영 장비 메타뷰로 얼굴 분석
                        </Design>

                        <Design
                            image="/images/detail/soprano_titanium/design_2.png"
                            title="2단계"
                        >
                            원장 1:1 상담 후 최적의 에너지 및 피부층 진단
                        </Design>

                        <Design
                            image="/images/detail/soprano_titanium/design_3.png"
                            title="3단계"
                        >
                            부위 별 모드 선택과 에너지 분배
                        </Design>

                        <Design
                            image="/images/detail/soprano_titanium/design_4.png"
                            title="4단계"
                        >
                            티타늄 디자인지 작성
                        </Design>
                    </div>
                </div>
            </section>

            <section className={Styles.step__section}>
                <div className="container">
                    <div className={Styles.step__header}>
                        <p className="title">소프라노 티타늄의 5스텝 프로그램</p>
                    </div>

                    <div className={Styles.step__contents}>
                        <div className={Styles.step__list}>
                            <Step
                                image="/images/detail/soprano_titanium/step.png"
                                title="Step 1"
                            >
                                3D 얼굴 촬영 장비<br />
                                메타뷰 얼굴 분석
                            </Step>

                            <Step
                                image="/images/detail/soprano_titanium/step.png"
                                title="Step 2"
                            >
                                1:1 원장 상담 및<br />
                                최적의 에너지 및 피부층<br />
                                진단 후 부위 별<br />
                                모드 선택과 에너지 분배
                            </Step>
                            <Step
                                image="/images/detail/soprano_titanium/step.png"
                                title="Step 3"
                            >
                                티타늄<br />
                                디자인지 작성
                            </Step>
                            <Step
                                image="/images/detail/soprano_titanium/step.png"
                                title="Step 4"
                            >
                                부위별 최적의 모드를<br />
                                적용한 맞춤 티타늄<br />
                                리프팅
                            </Step>
                            <Step
                                image="/images/detail/soprano_titanium/step.png"
                                title="Step 5"
                            >
                                티타늄<br />
                                정품 인증서 발급
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
                        <div className={Styles.pictogram__list__mobile}>
                            <Pictogram title="01." image="/images/detail/soprano_titanium/pictogram_1.svg">
                                통증이 적은 리프팅<br />
                                을 원하시는 분
                            </Pictogram>

                            <Pictogram title="02." image="/images/detail/soprano_titanium/pictogram_2.svg">
                                즉각적인 리프팅<br />
                                효과를 원하시는 분
                            </Pictogram>

                            <Pictogram title="03." image="/images/detail/soprano_titanium/pictogram_3.svg">
                                울쎄라 써마지<br />
                                효과를 오래 지속<br />
                                하고 싶으신 분
                            </Pictogram>

                            <Pictogram title="04." image="/images/detail/soprano_titanium/pictogram_4.svg">
                                웨딩 촬영 등<br />
                                중요한 일정을<br />
                                앞두신 분
                            </Pictogram>

                            <Pictogram title="05." image="/images/detail/soprano_titanium/pictogram_5.svg">
                                다운타임 없는<br />
                                시술을 원하시는 분
                            </Pictogram>
                        </div>

                        <div className={Styles.pictogram__list__desktop}>
                            <Pictogram title="01." image="/images/detail/soprano_titanium/pictogram_1.svg">
                                통증이 적은 리프팅<br />
                                을 원하시는 분
                            </Pictogram>

                            <Pictogram title="02." image="/images/detail/soprano_titanium/pictogram_2.svg">
                                즉각적인 리프팅<br />
                                효과를 원하시는 분
                            </Pictogram>

                            <Pictogram title="03." image="/images/detail/soprano_titanium/pictogram_3.svg">
                                울쎄라 써마지<br />
                                효과를 오래 지속<br />
                                하고 싶으신 분
                            </Pictogram>
                        </div>

                        <div className={Styles.pictogram__list__desktop}>
                            <Pictogram title="04." image="/images/detail/soprano_titanium/pictogram_4.svg">
                                웨딩 촬영 등<br />
                                중요한 일정을<br />
                                앞두신 분
                            </Pictogram>

                            <Pictogram title="05." image="/images/detail/soprano_titanium/pictogram_5.svg">
                                다운타임 없는<br />
                                시술을 원하시는 분
                            </Pictogram>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 