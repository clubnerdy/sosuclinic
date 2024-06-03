import { Client } from '@notionhq/client';
import { NotionToMarkdown } from "notion-to-md";
import { remark } from "remark";
import parse from "html-react-parser";
import html from "remark-html";
import Styles from '@styles/components/(layout)/promotionDetail.module.css';

export const revalidate = 60;

const NOTION_SITE = process.env.NOTION_SITE;
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const notion = new Client({
    auth: NOTION_API_KEY,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPromotionInfo(id) {
    const response = await notion.pages.retrieve({ page_id: id }) as any;
    return response?.properties ?? {};
}

export async function getPromotionContents(id) {
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);
    const processedContent = await remark()
        .use(html)
        .process(mdString.parent);
    return processedContent.toString();
}

export default async function PromotionDetail({ id }: { id: string }) {
    const contents = await getPromotionContents(id);
    const promotion = await getPromotionInfo(id);
    const title = promotion['이름']?.title[0]?.plain_text ?? '';
    const description = promotion['설명']?.rich_text[0]?.plain_text ?? '';
    const encodedSrc = encodeURIComponent(promotion['이미지']?.files[0]?.file.url ?? '');
    const notionImageUrl = `${NOTION_SITE}/image/${encodedSrc}?table=block&id=${id}&cache=v2`;

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <h1 className="title">{title}</h1>
                    <h1 className={Styles.subtitle}>{description}</h1>
                </div>

                <div className={Styles.vision}>
                    <div className={Styles.visual}>
                        <img src={notionImageUrl} alt={title} />
                    </div>

                    <div className={Styles.contents}>
                        {parse(contents)}
                    </div>
                </div>
            </div>
        </div >
    );
}

