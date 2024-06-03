import { Metadata } from 'next';
import { Suspense } from 'react';
import { Client } from '@notionhq/client';
import Styles from '@styles/pages/promotionDetail.module.css';
import PromotionContents from '@components/(frame)/promotionContents';
import PromotionMore from '@components/(layout)/promotionMore';
import Button from '@components/(frame)/button';

const NOTION_SITE = process.env.NOTION_SITE;
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const notion = new Client({
    auth: NOTION_API_KEY,
});

export const metadata: Metadata = {
    title: "프로모션",
};

async function getPromotionInfo(id) {
    const response = await notion.pages.retrieve({ page_id: id });
    return response;
}

export default async function page({ params: { id } }) {

    const promotion = await getPromotionInfo(id);
    const title = promotion['properties']['이름']?.title[0]?.plain_text ?? '';
    const description = promotion['properties']['설명']?.rich_text[0]?.plain_text ?? '';
    const encodedSrc = encodeURIComponent(promotion['properties']['이미지']?.files[0]?.file.url ?? '');
    const notionImageUrl = `${NOTION_SITE}/image/${encodedSrc}?table=block&id=${id}&cache=v2`;

    return (
        <main className={Styles.main}>
            <div className={Styles.section}>
                <div className="container">
                    <div className={Styles.header}>
                        <h1 className="title">{title}</h1>
                        <h1 className={Styles.subtitle}>{description}</h1>
                    </div>

                    <div className={Styles.visual}>
                        <img src={notionImageUrl} alt={title} />
                    </div>
                </div>
            </div >

            <Suspense>
                <PromotionMore id={id} />
            </Suspense>
        </main>
    );
}