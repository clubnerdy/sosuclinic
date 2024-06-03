import { Metadata } from 'next';
import Styles from '@styles/pages/schedule.module.css';

export const metadata: Metadata = {
    title: "진료일정",
};

export default function page(): JSX.Element {
    return (
        <main className={Styles.main}>
            <div className={Styles.section}>
                <div className="container">
                    <div className={Styles.header}>
                        <h1 className="title">진료 일정</h1>
                        <p className={Styles.description}>
                            진료 일정은 매달 상이할 수 있습니다. <br />
                            예약 없이 방문하실 예정이라면, 오시기 전 진료일정을 확인해주세요.
                        </p>
                    </div>

                    <div className={Styles.vision}>
                        <div className={Styles.visual}>
                            <img src="/images/layout/schedule_1.png" alt="schedule" />
                        </div>

                        <div className={Styles.visual}>
                            <img src="/images/layout/schedule_2.png" alt="schedule" />
                        </div>
                    </div>
                </div>
            </div >
        </main>
    );
}