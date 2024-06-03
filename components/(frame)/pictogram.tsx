import React from 'react';
import Styles from '@styles/components/(frame)/pictogram.module.css';

interface Pictogram {
    image: string;
    title: string;
    children?: React.ReactNode;
}

export default function Pictogram({ image, title, children }: Pictogram) {

    return (
        <div className={Styles.frame}>
            <p className={Styles.title}>{title}</p>

            <div className={Styles.contents}>
                <img src={image} alt={title} />
            </div>

            <div className={Styles.info}>
                <p className={Styles.description}>{children}</p>
            </div>
        </div>
    );
}