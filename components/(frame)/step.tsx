import React from 'react';
import Styles from '@styles/components/(frame)/step.module.css';

interface Step {
    image: string;
    title?: string;
    children?: React.ReactNode;
}

export default function Step({ image, title, children }: Step) {

    return (
        <div className={Styles.frame}>
            <div className={Styles.contents}>
                <img src={image} alt={title} />
            </div>

            {title ? <p className={Styles.title}>{title}</p> : null}

            <p className={Styles.description}>
                {children}
            </p>
        </div>
    );
}