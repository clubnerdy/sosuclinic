import Styles from '@styles/components/social.module.css';

interface Social {
    variant: string;
    URL: string;
}

const getSoicalByVariant = (social = 'instagram', URL = '') => {
    let content;

    if (social === 'instagram') {
        content = (
            <div className={Styles.soical} onClick={() => handleClickSocial(URL)}>
                <img src="/icons/Instagram.svg" alt="Instagram" />
            </div>
        );
    }

    return content;
}

const handleClickSocial = (soical = 'instagram') => {
    alert(soical + '이동');
}

export default function Social({ variant = 'instagram' }: Social) {

    return (
        <>
            {getSoicalByVariant(variant)}
        </>
    )
}