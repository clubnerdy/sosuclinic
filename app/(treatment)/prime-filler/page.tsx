import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import Design from '@components/(frame)/design';

export const metadata: Metadata = {
    title: "프라임 필러",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/prime_filler/main.png" alt="Prime Filler" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Prime Filler</h1>
                        <h2 className={Styles.visual__subtitle}>프라임 필러</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">프라임 필러란?</p>
                        <p className={Styles.intro__description}>
                            프라임 필러는 개인의 얼굴에 자연스럽고 조화롭게 볼륨을 채워주는 필러입니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/prime_filler/intro.png" alt="프라임 필러란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_filler/design_1.png"
                            title="이미지 분석 : 3D 얼굴 촬영 장비 메타뷰 얼굴 촬영"
                        >
                            이미지 분석을 통해 자연스러운 최적의 볼륨을 디자인 합니다.
                        </Design>

                        <Design
                            image="/images/detail/prime_filler/design_2.png"
                            title="맞춤 부위 필러 제품 컨설팅"
                        >
                            시술 부위, 입자별 크기, 피부 두께에 따라 <br />
                            다른 필러가 필요합니다. <br />
                            프리미엄 필러 라인업(쥬비덤, 벨로테로, 레스틸렌)을 <br />
                            모두 구비하여 최적화된 필러 제품을 추천드립니다.
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_filler/design_3.png"
                            title="맞춤 부위 필러 용량 컨설팅"
                        >
                            최소 용량, 최대 효과를 원칙으로 <br />
                            자연스러운 볼륨을 위한 최적의 용량을 추천드립니다.
                        </Design>

                        <Design
                            image="/images/detail/prime_filler/design_4.png"
                            title="리터치 프로그램"
                        >
                            심미적으로 아름다고 안정한 시술을 위해 <br />
                            리터치 프로그램이 포함 되어있습니다.
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/prime_filler/design_5.png"
                            title="안정성"
                        >
                            검증된 필러 정품 사용, 일회용 미세 케뉼라 사용 등 <br />
                            부작용을 낮추기 위해 기본에 충실합니다.
                        </Design>
                    </div>
                </div>
            </section>
        </main>
    );
} 