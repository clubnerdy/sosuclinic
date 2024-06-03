import React from 'react';
import Styles from '@styles/components/(layout)/nineView.module.css';

interface NineView {
    title: string;
    subtitle: string;
    firstChildren?: React.ReactNode;
    secondChildren?: React.ReactNode;
}

export default function NineView({ title, subtitle, firstChildren, secondChildren }: NineView) {

    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <p className="title">{title}</p>
                    <p className={Styles.subtitle}>{subtitle}</p>
                </div>

                <div className={Styles.contents}>
                    <div className={Styles.list}>
                        {firstChildren}
                    </div>

                    <div className={Styles.list}>
                        {secondChildren}
                    </div>
                </div>
            </div>
        </section>
    );
}