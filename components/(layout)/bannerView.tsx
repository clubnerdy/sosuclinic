import React from 'react';
import Styles from '@styles/components/(layout)/bannerView.module.css';

interface BannerView {
    title?: string;
    hero?: React.ReactNode;
    image: string;
    children?: React.ReactNode;
}

export default function BannerView({ title, hero, image, children }: BannerView) {

    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    {title ? <p className="title">{title}</p> : ''}
                    {children ? <p className={Styles.description}>{children}</p> : ''}
                </div>

                <div className={Styles.contents}>
                    <img src={image} alt={title} />
                </div>

                {hero ? <div className={Styles.hero}>{hero}</div> : ''}
            </div>
        </section>
    );
}