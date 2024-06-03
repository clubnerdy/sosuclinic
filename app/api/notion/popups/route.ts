import { NextResponse, NextRequest } from 'next/server';
import { Client } from '@notionhq/client';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_POPUP_PAGE_ID = process.env.NOTION_POPUP_PAGE_ID;

const notion = new Client({
	auth: NOTION_API_KEY,
});

export async function GET(request: NextRequest) {
	const response = await notion.databases.query({
		database_id: NOTION_POPUP_PAGE_ID || '',
		sorts: [{
			property: '게시 기간',
			direction: 'descending'
		}],
	});

	return NextResponse.json(response?.results ?? []);
}