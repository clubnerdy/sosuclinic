import Link from 'next/link';
import Styles from '@styles/components/(menu)/menuItem.module.css';

interface MenuItem {
    title: string;
    subtitle: string;
    isChild: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function MenuItem({ title, subtitle, isChild = false, isActive = false, isDisabled = false, onClick }: MenuItem) {

    return (
        <>
            {isChild ? (
                <div className={`${Styles.item} ${isActive ? Styles.active : ''} ${isDisabled ? Styles.disable : ''}`} onClick={onClick}>
                    <div className={Styles.info}>
                        <span className={Styles.title}>{title}</span>
                        <span className={Styles.subtitle}>{subtitle}</span>
                    </div>

                    <div className={Styles.icon}>
                        <img src="/icons/arrow_right_disable.svg" alt="arrow_right_disable" />
                    </div>
                </div>
            ) : (
                <div className={`${Styles.item} ${isActive ? Styles.active : ''} ${isDisabled ? Styles.disable : ''}`} onClick={onClick}>
                    <div className={Styles.info} onClick={onClick}>
                        <span className={Styles.title}>{title}</span>
                        <span className={Styles.subtitle}>{subtitle}</span>
                    </div>
                </div>
            )}
        </>
    )
}