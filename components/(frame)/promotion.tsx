"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Styles from '@styles/components/(frame)/promotion.module.css';

interface Promotion {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    closed: boolean;
    link?: string;
}

export default function Promotion({ image, title, subtitle, description, closed = false, link }: Promotion) {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <>
            {closed ? (
                <div className={Styles.frame}>
                    <div className={Styles.closed}></div>
                    <div className={Styles.visual}>
                        <Image
                            src={image}
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                        />
                        <div className={Styles.closed__title}>CLOSED</div>
                    </div>

                    <div className={Styles.contents}>
                        <div className={Styles.info}>
                            <p className={Styles.title}>{title}</p>
                        </div>

                        <div className={Styles.detail}>
                            <p className={Styles.subtitle}>{subtitle}</p>

                            <div className={Styles.line}></div>

                            <p className={Styles.description}>
                                {description}
                            </p>
                        </div>

                        <button className={Styles.button} type="button">
                            <span>DETAILS</span>
                            <img src="/icons/arrow_right.svg" alt="arrow_right" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className={Styles.frame}>

                    <Link href={link} className={Styles.visual}>
                        <img src={image} alt={title} />
                    </Link>

                    <div className={Styles.contents}>
                        <div className={Styles.info}>
                            <p className={Styles.title}>{title}</p>
                        </div>

                        <div className={Styles.detail}>
                            <p className={Styles.subtitle}>{subtitle}</p>

                            <div className={Styles.line}></div>

                            <p className={Styles.description}>
                                {description}
                            </p>
                        </div>

                        <Link href={link}>
                            <button className={Styles.button} type="button">
                                <span>DETAILS</span>
                                <img src="/icons/arrow_right.svg" alt="arrow_right" />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}