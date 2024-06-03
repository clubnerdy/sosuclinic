import Styles from '@styles/components/(layout)/vision.module.css';

export default function Vision() {

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.vision}>
                    <div className={Styles.visual}>
                        <img src="/images/layout/ceo.png" alt="visual" />
                    </div>

                    <div className={Styles.contents}>
                        <p className={Styles.description}>
                            저는 어린 시절부터 외모에 대한 관심이 많았습니다. <br />
                            제 외모에 대한 개인적인 분석과 노력, 그리고 시술들을 통해 <br />
                            고유한 아름다움을 발견하고 자신감을 가질 수 있었습니다. <br />
                            <br />
                            이런 관심과 강점을 바탕으로 환자들에게 공감하고, 분석하여, 최적의 치료를 제시해 자연스러운 아름다움을 찾는데 도움이 되었다고 자부합니다. <br />
                            <br />
                            소수의원이라는 이름 아래, 저희는 소수의 환자분들에게 집중하여, <br />
                            마치 장인이 작품에 심혈을 기울이듯, 한 분 한 분의 아름다움을 발견하고 소중히 다듬고 발전시킬 것을 약속합니다. <br />
                            <br />
                            저는 모든 환자분들에게 개인의 고유한 미를 최대한 자연스럽고 조화롭게 드러낼 수 있는 방법을 제공하고자 합니다. <br />
                            <br />
                            저의 전문적 지식과 실력, 그리고 미적 감각을 활용하여 여러분이 진정으로 원하는 자연스러운 아름다움을 실현해 드리겠습니다.
                        </p>

                        <p className={Styles.title}>
                            소수의원 대표원장 박 소 현
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}