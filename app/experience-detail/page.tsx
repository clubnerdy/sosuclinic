import { Metadata } from 'next';
import Styles from '@styles/pages/experience.module.css';
import ExperienceDetail from '@components/(layout)/experienceDetail';

export const metadata: Metadata = {
    title: "소수에서의 경험",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <ExperienceDetail />
        </main>
    );
}