import { Metadata } from 'next';
import Styles from '@styles/pages/treatmentDetail.module.css';
import BannerView from '@components/(layout)/bannerView';
import { formatDescription } from '@utils/string';

export const metadata: Metadata = {
    title: "시그니처 웨딩 플래닝",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <section className={Styles.visual}>
                <div className={Styles.visual__container}>
                    <div className={Styles.visual__background}>
                        <img src="/images/detail/signiture_wedding_planning/main.png" alt="Signiture Wedding Planning" />
                    </div>

                    <div className={Styles.visual__cover}></div>

                    <div className={Styles.visual__hero}>
                        <h1 className={Styles.visual__title}>Signiture Wedding Planning</h1>
                        <h2 className={Styles.visual__subtitle}>시그니처 웨딩 플래닝</h2>
                    </div>
                </div>
            </section>

            <section className={Styles.intro__section}>
                <div className="container">
                    <div className={Styles.intro__header}>
                        <p className="title">시그니처 웨딩 플래닝이란?</p>
                        <p className={Styles.intro__description}>
                            소수의원 시그니처 웨딩 플래닝은 소수의원 대표원장님의 결혼식을 준비하는 과정에서의 고민을 녹여 만든 <br />
                            신부님들 만을 위한 웨딩 프로그램입니다. <br />
                            스트디오 촬영 및 본식에서의 최고의 나로 거듭나기 위한 소수의원과 신부님의 동행입니다.
                        </p>
                    </div>

                    <div className={Styles.intro__contents}>
                        <img src="/images/detail/signiture_wedding_planning/intro.png" alt="시그니처 웨딩 플래닝란?" />
                    </div>
                </div>
            </section>

            <BannerView
                image="/images/detail/signiture_wedding_planning/banner_1.png"
                hero={formatDescription(
                    [
                        "체형을 제대로 분석하지 않고 일괄된 시술로만 진행했을 때 ",
                        "원하는 효과를 크게 보기 어려웠던 문제들이 많았습니다."
                    ],
                    {
                        textAlign: "center",
                        fontFamily: "Pretendard Variable",
                        fontSize: 22,
                        fontStyle: "normal",
                        fontWeight: 400,
                        color: "var(--text-black)",
                    }
                )}
            >
                <span className={Styles.banner__description}>
                    <span>턱 라인 개선을 원하여 유명한 리프팅 시술을 하였으나 개선되지 않았던 경험</span>
                    <span>데콜테 라인 개선을 원하여 고용량 승모근 보톡스를 시술했으나 개선되지 않았던 경험</span>
                    <span>팔뚝과 승마살에 지방분해주사를 다회 시술 받았으나 라인이 크게 개선되지 않았던 경험</span>
                </span>
            </BannerView>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>01.</p>
                        <p className={Styles.vertical__title}>라인을 계획하다.</p>
                        <p className={Styles.vertical__description}>
                            아름다운 드레스 라인을 위해 개별 문제점들을 정확하게 파악해야합니다.
                        </p>
                    </div>

                    <div className={Styles.vertical__contents}>
                        단순이 지방이 많은 이중턱인지<br />
                        턱이 짧거나 살이 늘어난 이중턱인지<br />
                        턱과 목라인의 경계는 뚜렷한지<br />
                        목이 짧아보이는지<br />
                        어깨라인은 근육과 지방이 어떻게 분포되어 있는지<br />
                        자세가 굽어있는지<br />
                        측면 삼각근이 과도하게 발달되어 있는지<br />
                        팔뚝 지방분포는 어떤지<br />
                        부유방의 양은 얼마나 되는지<br />
                        허리가 짧은 체형인지<br />
                        복부 지방분포는 어떤지<br />
                        개선 가능한 승마살인지<br />
                        ....
                    </div>

                    <div className={Styles.vertical__footer}>
                        개인이 가지고 있는 최선의 라인을 만들기 위해 <br />
                        개선 가능한 문제점들을 파악합니다.
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>02.</p>
                        <p className={Styles.vertical__title}>웨딩드레스의 종류에 따라 집중하다.</p>
                        <p className={Styles.vertical__description}>
                            본인의 체형을 커버하는 웨딩드레스를 선택했을 것입니다. <br />
                            드레스로 가릴 수 없는 부분에 더 집중한 솔루션을 제공합니다.
                        </p>
                    </div>

                    <div className={Styles.vertical__image}>
                        <img src="/images/detail/signiture_wedding_planning/banner_2.png" alt="웨딩드레스의 종류에 따라 집중하다." />
                    </div>

                    <p className={Styles.vertical__description}>
                        예로 머메이드 드레스를 선택했을 경우 승마살라인도 고려하지만 벨라인 드레스의 경우 필요하지 않습니다.
                    </p>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>03.</p>
                        <p className={Styles.vertical__title}>일정에 맞추다.</p>
                        <p className={Styles.vertical__description}>
                            바쁜 웨딩일정에 맞춘 최적의 솔루션을 제공합니다.
                        </p>
                        <p className={Styles.vertical__description}>
                            <strong className={Styles.visual__strong}>9개월/6개월/3개월/1개월</strong>
                        </p>
                    </div>

                    <p className={Styles.vertical__description}>
                        스튜디오나 본식 직전에는 즉시 효과가 나타나는 시술과 다운타임이 없는 시술을 <br />
                        3~9개월 전에는 효과가 늦게 나타지만 강력한 시술을 <br />
                        스튜디오 촬영 및  본식 일정. 신부님의 일정에 맞춤 솔루션을 제공합니다.
                    </p>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">
                    <div className={Styles.vertical__header}>
                        <p className={Styles.vertical__number}>04.</p>
                        <p className={Styles.vertical__title}>소수의원만의 맞춤 프리미엄 솔루션</p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>턱~목 라인을 뚜렷히 하다.</strong>
                        <p className={Styles.vertical__description}>프라임 울쎄라/프라임 튠페이스/보톡스/스킨보톡스/지방분해주사/실리프팅</p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>아름다운 목~어깨 라인을 만들다.</strong>
                        <p className={Styles.vertical__description}>프라임 튠페이스/프라임 튠바디/보톡스/지방분해주사</p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>어깨~팔 라인을 슬림하게 하다.</strong>
                        <p className={Styles.vertical__description}>프라임 튠바디/바디 주사/바디 HIFU</p>
                    </div>

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>가장 빛나는 날이 되게 하다.</strong>
                        <p className={Styles.vertical__description}>프라임 튠페이스/소프라노 티타늄/프라임 스킨부스터/메디컬 스킨케어</p>
                    </div>
                </div>
            </section>

            <section className={Styles.vertical__section}>
                <div className="container">

                    <div className={Styles.vertical__item}>
                        <strong className={Styles.vertical__strong}>*웨딩 프로모션</strong>
                        <p className={Styles.vertical__description}>웨딩홀 계약서 또는 청접장 제시시 할인 혜택이 주어집니다.</p>
                    </div>

                </div>
            </section>
        </main>
    );
} 