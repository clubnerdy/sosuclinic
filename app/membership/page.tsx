import { Metadata } from 'next';
import Styles from '@styles/pages/membership.module.css';

export const metadata: Metadata = {
    title: "멤버쉽",
};

export default function page(): JSX.Element {
    return (
        <main className={Styles.main}>
            <div className={Styles.section}>
                <div className="container">
                    <div className={Styles.header}>
                        <span className="title">멤버쉽</span>
                    </div>

                    <div className={Styles.contents}>
                        <img src="/images/member.png" alt="멤버쉽" />
                    </div>
                </div>
            </div >
        </main>
    );
}