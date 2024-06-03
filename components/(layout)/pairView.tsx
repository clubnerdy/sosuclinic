import Styles from '@styles/components/(layout)/pairView.module.css';

export default function PairView() {

    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <p className="title">Authorization</p>
                    <p className={Styles.description}>
                        소수의원은 정품 울쎄라 기계와 정품 팁만을 사용합니다. <br />
                        멀츠코리아 지정 울쎄라 인증 의사가 한분 한분 맞춤 시술을 제공합니다.
                    </p>
                </div>

                <div className={Styles.contents}>
                    <img src="/images/gray.png" alt="authorization" />
                    <img src="/images/gray.png" alt="authorization" />
                </div>
            </div>
        </section>
    );
}