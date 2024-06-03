"use client"

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import Styles from '@styles/components/(layout)/experience.module.css';
import Button from '@components/(frame)/button';

export default function Experience() {
    const [active, setActive] = useState(false);
    const target = useRef(null);

    const handleScroll = () => {
        if (target.current) {
            const targetPosition = target.current.getBoundingClientRect().top;

            if (targetPosition <= 300) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
    };

    useEffect(() => {
        AOS.init();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div ref={target} className={`${Styles.section} ${active && Styles.active}`}>
            <div className={Styles.background}></div>

            <div className="container">
                <div className={Styles.header}>
                    <span className="title">소수에서의 경험</span>
                    <p className={Styles.description}>
                        의원에 들어오는 순간부터 나가는 순간까지, 소수의원은 매 순간의 경험이 기분 좋을 수 있도록 <br />
                        언제나 최고의 서비스를 제공합니다.
                    </p>
                </div>

                <div className={Styles.contents}>
                    <div className={Styles.frame}
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                        data-aos-delay="500">
                        <img src="/images/frame/experiance_1.png" alt="PRIVATE" />

                        <div className={Styles.hover}>PRIVATE</div>
                    </div>
                    <div className={Styles.frame}
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                        data-aos-delay="700">
                        <img src="/images/frame/experiance_2.png" alt="COMFORT" />

                        <div className={Styles.hover}>COMFORTABLE</div>
                    </div>
                    <div className={Styles.frame}
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                        data-aos-delay="900">
                        <img src="/images/frame/experiance_3.png" alt="PROFESSIONAL" />

                        <div className={Styles.hover}>PROFESSIONAL</div>
                    </div>
                </div>

                <p className={Styles.description}>
                    소수의원은 환자의 특성과 바라는 결과에 따라 맞춤형 시술을 제공합니다. <br />
                    장기적 관점에서 환자에게 도움이 되는 계획을 제시해드리는 것이 진정 환자를 위한 길이라고 믿기에 <br />
                    시간이 다소 소요되더라도 소수의 환자 한 분 한 분께 집중하고 있습니다.
                </p>

                <Link href="/experience-detail">
                    <Button title="더보기" size="small" theme="sepia" />
                </Link>
            </div>
        </div >
    );
}