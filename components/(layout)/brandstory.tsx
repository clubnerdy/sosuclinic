"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Styles from '@styles/components/(layout)/brandstory.module.css';
import Button from '@components/(frame)/button';

export default function Brandstory() {
    const [width, setWidth] = useState(0);
    const target = useRef(null);

    const handleScroll = () => {
        if (target.current) {
            const { top, height } = target.current?.getBoundingClientRect();
            const targetPosition = top - (height / 2.5);
            const windowHeight = window.innerHeight;

            if (targetPosition < windowHeight) {
                setWidth((1 - ((targetPosition) / windowHeight)) * 100);
            } else {
                setWidth(0);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className={Styles.section} ref={target}>
            <div className="container">
                <div className={Styles.header}>
                    <span className="title">정성을 다하는 소수의원입니다.</span>
                </div>

                <div className={Styles.contents}>
                    <img src="/images/layout/brandstory.png" alt="brandstory" style={{ width: `${width}%` }} />
                </div>

                <div className={Styles.footer}>
                    <p className={Styles.description}>
                        서울시 성수동에 위치한 소수의원은 매일 특별한 소수만을 위한 의료 서비스를 제공합니다. <br />
                        정확한 진단과 논리적인 상담을 통해 자연스럽고 장기적 관점에서 환자에게 도움이 되는 계획을 제시합니다. <br />
                        최신의 의료 기술과 정보, 다수의 임상경험을 바탕으로 안전하고 효과적인 치료를 받을 수 있습니다. <br />
                        상담, 관리, 시술은 모두 프라이빗한 개인 시술실에서 이루어지며 직원들은 친절하고 전문적으로 환자를 응대합니다.
                    </p>

                    <Link href="/brandstory-detail">
                        <Button title="더보기" />
                    </Link>
                </div>
            </div>
        </div >
    );
}