"use client"

import Styles from '@styles/components/(layout)/story.module.css';
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={Styles.info}>
            <h6 className={Styles.subtitle} onClick={() => setIsOpen(!isOpen)}>{title}</h6>
            <img className={`${Styles.mobileArrow} ${isOpen ? Styles.active : ''}`} src="/icons/arrow_down_black.svg" alt="arrow_down_black" />
            <div className={`${Styles.description} ${isOpen ? Styles.active : ''}`}>{children}</div>
        </div>
    );
};

export default function Story() {

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className="title">브랜드 스토리</div>

                <div className={Styles.desktopVisual}>
                    <img src="/images/layout/story.png" alt="story" />
                </div>

                <div className={Styles.mobileVisual}>
                    <img src="/images/layout/story.png" alt="story" />
                </div>

                <div className={Styles.contents}>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="Only Sosu">
                        소수의원이라는 이름은 저희의 핵심 가치와 약속을 담고 있습니다. <br />
                        저희는 품질과 결과에 있어 타협하지 않습니다. <br />
                        의료 서비스를 대규모로 제공하기보다 소수의 환자에게 집중하여 개인 맞춤 진료와 치료를 제공합니다. <br />
                        소수의원은 환자 한 명 한 명에 전적으로 집중하여 가장 완성도 높은 결과를 만들어냅니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="Prevention rather than correction">
                        소수의원은 문제가 발생하기 전에 예방하는 것이 해결하는 것보다 낫다는 철학을 가지고 있습니다. <br />
                        이를 통해 불필요한 치료와 개입을 최소화하고, 자연스러운 아름다움을 최대한 보존합니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="Identity">
                        소수의원은 모든 개인의 독특한 아름다움과 개성을 존중합니다. <br />
                        환자 한 명, 한 명의 고민을 이해하고, 그들이 진정으로 원하는 모습을 찾도록 돕습니다. <br />
                        획일적이고 인위적인 아름다움 대신 개인에 맞춘 자연스러운 아름다움을 추구합니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="Well aging">
                        저희는 노화를 부정적인 것으로 보지 않습니다.<br />
                        오히려, 건강하고 자연스럽게 노화하는 과정에서 기품있고 아름다운 삶을 추구할 수 있다고 생각합니다. <br />
                        이를 위해 소수의원은 최신 연구를 적용하고 끊임없는 혁신을 통해 피부를 개선하고, 건강한 노화 과정을 지원합니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="Less is More">
                        소수의원에서는 미니멀리즘 접근 방식을 채택합니다. <br />
                        "Less is More"의 원칙을 따라, 저희는 꼭 필요한 치료에만 집중하며, 과도한 개입을 피합니다. <br />
                        이를 통해 환자는 더 효과적이고 자연스러운 결과를 얻을 수 있습니다.
                    </AccordionItem>

                </div>
            </div>
        </div >
    );
}