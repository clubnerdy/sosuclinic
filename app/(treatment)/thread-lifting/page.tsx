import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import Design from '@components/(frame)/design';

export const metadata: Metadata = {
    title: "실리프팅",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/thread_lifting/main.png" alt="Thread Lifting" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Thread Lifting</h1>
                        <h2 className={Styles.visual__subtitle}>실리프팅</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">나만의 실리프팅이란?</p>
                        <p className={Styles.intro__description}>
                            나만의 실리프팅은 개인의 얼굴형에 알맞은 입체적인 벡터 디자인으로 자연스럽게 피부를 물리적으로 올려주는 시술이며, <br />
                            강력한 리프팅 효과를 제공하는 시술입니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/thread_lifting/intro.png" alt="실리프팅이란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">소수의원 실리프팅의 차별점</p>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/thread_lifting/design_1.png"
                            title="이미지 분석 : 3D 얼굴 촬영 장비 메타뷰 얼굴 촬영"
                        >
                            이미지 분석을 통해 자연스러운 결과를 위한 <br />
                            최적의 벡터를 디자인 합니다. <br />
                            당기는 방향, 힘조절, 고정 위치 등을 <br />
                            개별 얼굴형에 맞춰 고려합니다.
                        </Design>

                        <Design
                            image="/images/detail/thread_lifting/design_2.png"
                            title="맞춤 부위 실 제품 컨설팅"
                        >
                            시술 부위, 피부 두께, 탄력에 따라 다른 제품이 필요합니다. <br />
                            실루엣소프트, 민트, 캐번, 블루로즈 등을 <br />
                            구비하여 최적화된 실 제품을 추천드립니다.
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/thread_lifting/design_3.png"
                            title="안정성"
                        >
                            인체에 무해한 녹는 실만을 사용합니다.
                        </Design>
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__title}>복합 프로그램</p>
                        <p className={Styles.vertical__description}>
                            자연스럽고 강력한 리프팅 효과를 위한 다양한 솔루션을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>울쎄라 + (튠) + 실리프팅</strong>
                        <p className={Styles.vertical__description}>심부볼, 이중턱 개선 등 강력한 얼굴 라인정리를 원하시는 분</p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>튠 + 실리프팅</strong>
                        <p className={Styles.vertical__description}>늘어진 피부개선, 콜라겐 재생 및 타이트닝 효과를 원하시는 분</p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>필러/쥬베룩 볼륨 + 실리프팅</strong>
                        <p className={Styles.vertical__description}>팔자, 옆볼 등 꺼진 부위 볼륨개선과 리프팅 효과를 동시에 원하시는 분</p>
                    </div>

                </div>
            </section>
        </main>
    );
} 