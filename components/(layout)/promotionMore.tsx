import { Client } from '@notionhq/client';
import Styles from '@styles/components/(layout)/promotionMore.module.css';
import Promotion from '@components/(frame)/promotion';
import getCoverUrl from '@utils/notionCover';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_PROMOTION_PAGE_ID = process.env.NOTION_PROMOTION_PAGE_ID;

const notion = new Client({
    auth: NOTION_API_KEY,
});

const getPromotionOthers = async (id) => {
    try {
        const response = await notion.databases.query({
            database_id: NOTION_PROMOTION_PAGE_ID || '',
            sorts: [
                {
                    property: '프로모션 기간',
                    direction: 'descending'
                }
            ],
            page_size: 3,
        });

        return response?.results?.filter(promotion => promotion.id !== id) ?? [];
    } catch (error) {
        console.error(JSON.stringify(error));
        return [];
    }
}

const renderPromotions = (promotions = []) => {
    return promotions.map(promotion => {
        const { id, properties = {} } = promotion;
        const title = properties['이름']?.title[0]?.plain_text ?? '';
        const subtitle = properties['부제목']?.rich_text[0]?.plain_text ?? '';
        const description = properties['설명']?.rich_text[0]?.plain_text ?? '';
        const cover = getCoverUrl(promotion?.cover ?? '', id);
        const endAt = new Date(properties['프로모션 기간']?.date?.end).getTime();
        const today = new Date().getTime();

        return <Promotion
            key={id}
            image={cover}
            title={title}
            subtitle={subtitle}
            description={description}
            closed={endAt < today}
            link={`/promotion-detail/${id}`}
        />
    })
}

export default async function PromotionMore({ id }: { id: string }) {
    const promotions = await getPromotionOthers(id);

    return (
        <div className={Styles.section}>
            <div className="container">
                <h1 className={Styles.title}>MORE</h1>

                <div className={Styles.vision}>
                    {renderPromotions(promotions)}
                </div>
            </div>
        </div >
    );
}