import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import Design from '@components/(frame)/design';
import BannerView from '@components/(layout)/bannerView';

export const metadata: Metadata = {
    title: "항산화수액",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/iv_therapy/main.png" alt="IV Therapy" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>IV Therapy</h1>
                        <h2 className={Styles.visual__subtitle}>항산화수액</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">항산화수액이란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 항산화수액은 노화의 원인이 되는 활성산소 억제, <br />
                            신진대사 활성화 및 노폐물 제거를 통해 피부 개선, 면역활성, 피로 회복에 특화된 수액입니다.
                        </p>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/iv_therapy/design_1.png"
                            title="글루타치온"
                        >
                        </Design>

                        <Design
                            image="/images/detail/iv_therapy/design_2.png"
                            title="티옥트산"
                        ></Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/iv_therapy/design_3.png"
                            title="푸르설타민"
                        >
                        </Design>

                        <Design
                            image="/images/detail/iv_therapy/design_4.png"
                            title="마이어스칵테일"
                        ></Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/iv_therapy/design_5.png"
                            title="히씨파겐씨"
                        >
                        </Design>

                        <Design
                            image="/images/detail/iv_therapy/design_6.png"
                            title="아스크로브산"
                        ></Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/iv_therapy/design_7.png"
                            title="미네랄"
                        >
                        </Design>

                        <Design
                            image="/images/detail/iv_therapy/design_8.png"
                            title="태반주사"
                        ></Design>
                    </div>
                </div>
            </section>

            <BannerView
                image="/images/detail/iv_therapy/banner_1.png"
            >
                <span className={Styles.vertical__title}>
                    상담을 통해 맞춤 조합으로 <br />
                    안전하고 효과적인 맞춤 레시피를 제공합니다.
                </span>
            </BannerView>
        </main>
    );
} 