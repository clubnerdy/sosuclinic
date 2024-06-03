import { Client } from '@notionhq/client';
import { NotionToMarkdown } from "notion-to-md";
import { remark } from "remark";
import parse from "html-react-parser";
import html from "remark-html";

interface PromotionContents {
    id: string;
}

export const revalidate = 60;

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const notion = new Client({
    auth: NOTION_API_KEY,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPromotionContents(id) {
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);
    const processedContent = await remark()
        .use(html)
        .process(mdString.parent);
    return processedContent.toString();
}

export default async function PromotionContents({ id }: PromotionContents) {
    const contents = await getPromotionContents(id);

    return (
        <>
            {parse(contents)}
        </>
    );
}