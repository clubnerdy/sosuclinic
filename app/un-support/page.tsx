import { Metadata } from 'next';
import Styles from '@styles/pages/unsupport.module.css';

export const metadata: Metadata = {
    title: "비급여 수가",
};

export default function page(): JSX.Element {
    return (
        <main className={Styles.main}>
            <div className={Styles.section}>
                <div className="container">
                    <div className={Styles.header}>
                        <span className="title">비급여 수가</span>
                    </div>

                    <div className={Styles.contents}>
                        <img src="/images/price.png" alt="비급여 수가" />
                    </div>
                </div>
            </div >
        </main>
    );
}