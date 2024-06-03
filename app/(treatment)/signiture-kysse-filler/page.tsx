import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';

export const metadata: Metadata = {
    title: "시그니처 키스 필러",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/signiture_kysse_filler/main.png" alt="Signiture Kysse Filler" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Signiture Kysse Filler</h1>
                        <h2 className={Styles.visual__subtitle}>시그니처 키스 필러</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">시그니처 키스 필러란?</p>
                        <p className={Styles.intro__description}>
                            소수의원의 시그니처 키스 필러는 입술에만 집중하지 않습니다. <br />
                            얼굴의 전반적인 비율 고려한 맞춤 입술필러로 조화로운 아름다움을 선사합니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/signiture_kysse_filler/intro.png" alt="프라임 필러란?" />
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>01.</p>
                        <p className={Styles.vertical__title}>숙련된 의료진</p>
                        <p className={Styles.vertical__description}>
                            입술 필러 1000 case + 경험의 숙련된 의료진이 진행합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>02.</p>
                        <p className={Styles.vertical__title}>입술에 대한 세밀한 분석</p>
                        <p className={Styles.vertical__description}>
                            입술 비율 : 상하 폭, 좌우 길이, 입술 볼륨
                        </p>
                    </div>

                    <div className={Styles.vertical__frame}>
                        <img src="/images/detail/signiture_kysse_filler/banner_1.png" alt="입술에 대한 세밀한 분석" />

                        <div className={Styles.vertical__info}>
                            <p>또렷한 입술선</p>
                            <p>입꼬리 윤곽</p>
                            <p>입술 말림</p>
                            <p>입술 주름</p>
                            <p>입술 비대칭</p>
                            <p>아래로 처진 시옷자 입술</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>03.</p>
                        <p className={Styles.vertical__title}>얼굴 전체적인 조화를 고려한 디자인</p>
                        <p className={Styles.vertical__description}>
                            입술 뿐만아니라 얼굴 전반적인 비율을 고려해서 자연스러운 디자인을 지향합니다.
                        </p>
                    </div>

                    <div className={Styles.vertical__frame}>
                        <img src="/images/detail/signiture_kysse_filler/banner_2.png" alt="얼굴 전체적인 조화를 고려한 디자인" />

                        <div className={Styles.vertical__info}>
                            <p>코와 입술가로 길이 비율</p>
                            <p>인중의 길이</p>
                            <p>구강 구조, 치아의 돌출 여부</p>
                            <p>턱의 돌출여부</p>
                            <p>얼굴 면적에서 차지하는 입술의 크기</p>
                        </div>
                    </div>

                    <p className={Styles.vertical__description}>
                        상담으로 세밀한 디테일에 대한 합의가 이루어져야 만족스러운 결과가 나온다고 믿기 때문에 디테일에 집착합니다.
                    </p>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>04.</p>
                        <p className={Styles.vertical__title}>레스틸렌 키스 제품 사용</p>
                        <p className={Styles.vertical__description}>
                            FDA 승인을 받은 안정성이 높고 신뢰할 수 있는 입술 전용 필러로 진행합니다.
                        </p>
                    </div>

                    <div className={Styles.vertical__image}>
                        <img src="/images/detail/signiture_kysse_filler/banner_3.png" alt="레스틸렌 키스 제품 사용" />
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>05.</p>
                        <p className={Styles.vertical__title}>리터치 시술 포함 정책</p>
                        <p className={Styles.vertical__description}>
                            한번의 시술보다 두번의 시술로 나누어 진행하여야 만족도가 높고 유지기간이 길기 때문에 <br />
                            리터치 포함 시술을 고집합니다.
                        </p>
                    </div>

                    <div className={Styles.vertical__image}>
                        <img src="/images/detail/signiture_kysse_filler/banner_4.png" alt="리터치 시술 포함 정책" />
                    </div>
                </div>
            </section>
        </main>
    );
} 