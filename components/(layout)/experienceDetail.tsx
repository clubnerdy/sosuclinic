"use client"

import Styles from '@styles/components/(layout)/experienceDetail.module.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';

export default function ExperienceDetail() {

    const AccordionItem = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className={Styles.detail}>
                <h6 className={Styles.subtitle} onClick={() => setIsOpen(!isOpen)}>{title}</h6>
                <img className={`${Styles.mobileArrow} ${isOpen ? Styles.active : ''}`} src="/icons/arrow_down_black.svg" alt="arrow_down_black" />
                <div className={`${Styles.description} ${isOpen ? Styles.active : ''}`}>{children}</div>
            </div>
        );
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <span className="title">소수에서의 경험</span>
                </div>

                <div className={Styles.contents}>
                    <div className={Styles.frame}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="0">
                        <img src="/images/frame/experiance_1.png" alt="PRIVATE" />

                        <div className={Styles.hover}>PRIVATE</div>
                    </div>
                    <div className={Styles.frame}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="100">
                        <img src="/images/frame/experiance_2.png" alt="COMFORTABLE" />

                        <div className={Styles.hover}>COMFORTABLE</div>
                    </div>
                    <div className={Styles.frame}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="200">
                        <img src="/images/frame/experiance_3.png" alt="PROFESSIONAL" />

                        <div className={Styles.hover}>PROFESSIONAL</div>
                    </div>
                </div>

                <div className={Styles.info}>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="건강한 아름다움을 향한 여정">
                        소수의원에서는 각 개인의 독특한 아름다움과 건강을 중시합니다. 저희는 미니멀리즘과 예방 중심의 접근 방식을 취하여, 자연스러움과 진정성을 추구하며, 건강하고 자연스럽게 노화하는 것을 지지합니다. 이런 철학은 소수의원에서의 모든 경험과 서비스에 반영됩니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="맞춤형 진료의 시작 : 메타뷰를 이용한 3D 얼굴 분석">
                        소수의원의 경험은 고도의 개인화에서 시작됩니다. 최첨단 3D 촬영 장비인 메타뷰를 통해 환자의 얼굴을 정밀하게 분석합니다. 이를 바탕으로 우리는 각 환자에게 가장 적합한 맞춤형 진료 계획을 제공합니다. 이 과정을 통해, 환자 개개인의 요구와 기대를 충족시키며, 최적의 결과를 도출합니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="VIP 서비스 : 넓은 개인 실에서의 쾌적한 경험">
                        소수의원은 환자의 프라이버시와 편안함을 최우선으로 생각합니다. 모든 진료실은 넓고 고급스러운 VIP 개인실로 설계되어 있어, 환자는 쾌적하고 프라이빗한 환경에서 진료를 받을 수 있습니다. 이러한 세심한 배려는 소수의원에서의 경험을 특별하게 만들어줍니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="전문가의 직접 상담 : 원장님의 깊이 있는 안목">
                        소수의원에서는 원장님이 직접 상담을 진행합니다. 원장님의 깊이 있는 안목과 풍부한 경험을 통해, 환자의 필요와 기대를 정확히 이해하고, 최적의 시술 방안을 제시합니다. 이는 환자에게 가장 이상적인 결과를 보장합니다.
                    </AccordionItem>

                    <div className={Styles.mobileLine}></div>

                    <AccordionItem title="통합적인 접근방식 : 얼굴 전체의 조화를 고려한 진료">
                        소수의원은 시술 부위만을 고려하지 않습니다. 소수의원의 통합적인 접근 방식은 얼굴 전체의 조화와 균형을 중요하게 생각합니다. 이를 통해 환자는 자연스러운 아름다움을 얻을 수 있으며, 시술 후에도 자신감을 가지고 생활할 수 있습니다.
                    </AccordionItem>

                </div>
            </div>
        </div >
    );
}