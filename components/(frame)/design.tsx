import Styles from '@styles/components/(frame)/design.module.css';

interface Step {
    image: string;
    title: string;
    children?: React.ReactNode;
}

export default function Design({ image, title, children }: Step) {

    return (
        <div className={Styles.frame}>
            <div className={Styles.contents}>
                <img src={image} alt={title} />
            </div>

            <div className={Styles.info}>
                <p className={Styles.title}>{title}</p>
                {children && <p className={Styles.subtitle}>{children}</p>}
            </div>
        </div>
    );
}