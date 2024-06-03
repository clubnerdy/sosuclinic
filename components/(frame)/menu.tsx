import Styles from '@styles/components/(frame)/menu.module.css';
import Link from 'next/link';

interface Menu {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

export default function Menu({ image, title, subtitle, description, link }: Menu) {

    return (
        <div className={Styles.frame}>
            <Link href={link} className={Styles.header}>
                <img src={image} alt={title} />
            </Link>

            <div className={Styles.contents}>
                <Link href={link} className={Styles.title}>{title}</Link>

                <div className={Styles.info}>
                    <h6 className={Styles.subtitle}>{subtitle}</h6>

                    <div className={Styles.line}></div>

                    <p className={Styles.description}>{description}</p>

                    <Link href={link} className={Styles.button} type="button">
                        <span>VIEW MORE</span>
                        <img src="/icons/arrow_right.svg" alt="arrow_right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}