import { Metadata } from 'next';
import Styles from '@styles/pages/promotion.module.css';
import PromotionList from '@components/(layout)/promotionList';

export const metadata: Metadata = {
    title: "프로모션",
};

export default async function Page() {
    return (
        <main className={Styles.main}>
            <PromotionList />
        </main>
    );
}