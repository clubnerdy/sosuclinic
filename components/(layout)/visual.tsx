"use client"

import AOS from 'aos';
import React, { useEffect } from 'react';
import Styles from '@styles/components/(layout)/visual.module.css';

export default function Visual() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className={Styles.section}>
            <div className={Styles.video}>
                <img src="/images/asset_video.png" alt="asset_video" />
            </div>

            <div className={Styles.hero}>
                <div></div>
                <h1
                    className={Styles.hero__title}
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    DISCOVER YOUR<br className={Styles.hero__br} /> UNIQUE BRILLIANCE
                </h1>
                <h2 className={Styles.hero__subtitle}
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    당신만의 빛을 발견하다</h2>
            </div>
        </section>
    );
}