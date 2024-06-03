import { Metadata } from 'next';
import Styles from '@styles/pages/brandstoryDetail.module.css';
import Story from '@components/(layout)/story';
import Vision from '@components/(layout)/vision';

export const metadata: Metadata = {
    title: "브랜드 스토리",
};

export default function page(): JSX.Element {

    return (
        <main className={Styles.main}>
            <Story />
            <Vision />
        </main>
    );
}