const NOTION_SITE = process.env.NOTION_SITE;

interface ExternalCover {
    type: 'external';
    external: {
        url: string;
    };
}

interface FileCover {
    type: 'file';
    file: {
        url: string;
        expiry_time: string;
    };
}

type Cover = ExternalCover | FileCover;

export const getCoverUrl = (cover: Cover, id: string): string => {
    switch (cover.type) {
        case 'external':
            return cover.external.url;
        case 'file':
            const encodedSrc = encodeURIComponent(cover.file.url);
            const notionImageUrl = `https://greyscale.notion.site/image/${encodedSrc}?table=block&id=${id}&cache=v2`;
            return notionImageUrl;
        default:
            return '';
    }
};

export default getCoverUrl;
