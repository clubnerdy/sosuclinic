import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import Design from '@components/(frame)/design';

export const metadata: Metadata = {
    title: "콜라겐 부스터",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/collagen_stimulators/main.png" alt="Collagen Stimulators" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Collagen Stimulators</h1>
                        <h2 className={Styles.visual__subtitle}>콜라겐 부스터</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">콜라겐 부스터란?</p>
                        <p className={Styles.intro__description}>
                            콜라겐 부스터는 피부 속 자가 콜라겐 생성을 유도하여 서서히 볼륨을 차오르게 만드는 시술입니다. <br />
                            필러 보다 더 자연스러운 볼륨감과 잔주름 및 결 개선 효과를 동시에 볼 수 있습니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/collagen_stimulators/intro.png" alt="콜라겐 부스터란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">종류</p>
                        <p className={Styles.design__description}>
                            소수의원의 항산화수액은 노화의 원인이 되는 활성산소 억제, <br />
                            신진대사 활성화 및 노폐물 제거를 통해 피부 개선, 면역활성, 피로 회복에 특화된 수액입니다.
                        </p>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/collagen_stimulators/design_1.png"
                            title="쥬베룩 볼륨"
                        >
                            PDLLA + HA
                        </Design>

                        <Design
                            image="/images/detail/collagen_stimulators/design_2.png"
                            title="스컬트라"
                        >
                            PLLA
                        </Design>
                    </div>
                </div>
            </section>

            <section className={Styles.design__section}>
                <div className={Styles.design__container}>
                    <div className={Styles.design__header}>
                        <p className="title">소수의원 콜라겐 부스터</p>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/collagen_stimulators/design_3.png"
                            title="이미지 분석 : 3D 얼굴 촬영 장비 메타뷰 얼굴 촬영"
                        >
                            이미지 분석을 통해 자연스러운 최적의 볼륨을 디자인 합니다.
                        </Design>

                        <Design
                            image="/images/detail/collagen_stimulators/design_4.png"
                            title="맞춤 부위 용량 컨설팅"
                        >
                            안전하고 효과적인 시술을 위해 2회 이상의 <br />
                            다회차 프로그램으로 구성되어 있습니다. <br />
                            필요한 볼륨의 양에 따라 시술 횟수를 제안드립니다.
                        </Design>
                    </div>

                    <div className={Styles.design__list}>
                        <Design
                            image="/images/detail/collagen_stimulators/design_5.png"
                            title="안전한 시술"
                        >
                            안전한 수화 및 철저한 간호 교육, 일회용 미세 케뉼라 사용 등 <br />
                            부작용을 낮추기 위해 기본에 충실합니다.
                        </Design>
                    </div>
                </div>
            </section>
        </main>
    );
} 