import Styles from '@styles/components/(frame)/button.module.css';

interface Button {
    title: string;
    size?: string;
    theme?: string;
    icon?: string;
    link?: string;
}

export default function Button({ title = 'Button', size = '', theme = '', icon = '', link = '' }: Button) {

    return (
        <div className={`
            ${Styles.button} 
            ${size === 'small' ? Styles.small : ''} 
            ${theme === 'sepia' ? Styles.sepia : ''}
            ${theme === 'warmgrey' ? Styles.warmgrey : ''}
        `}>
            {icon != '' ? <img src={icon} alt={title} /> : ''}

            <span>{title}</span>
        </div>
    );
}