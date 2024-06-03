import Styles from '@styles/components/(layout)/instagram.module.css';

// 인스타그램 API 연동은 아래 링크를 참고하여 연동하시길 바랍니다.
// https://prosell.oopy.io/d34a383e-b1a5-4e87-8a95-cf5d8493265b
export default function instagram() {

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <span className={Styles.title}>Instagram</span>
                </div>

                <div className={Styles.contents}>
                    <div className={Styles.card}>
                        <img src="/images/test.png" alt="test.png" />
                    </div>

                    <div className={Styles.card}>
                        <img src="/images/test.png" alt="test.png" />
                    </div>

                    <div className={Styles.card}>
                        <img src="/images/test.png" alt="test.png" />
                    </div>

                    <div className={Styles.card}>
                        <img src="/images/test.png" alt="test.png" />
                    </div>
                </div>
            </div>
        </div >
    );
}