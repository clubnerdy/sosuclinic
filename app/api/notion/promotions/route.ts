import { NextResponse, NextRequest } from 'next/server';
import { Client } from '@notionhq/client';
import { createLogger, format, transports } from 'winston';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_PROMOTION_PAGE_ID = process.env.NOTION_PROMOTION_PAGE_ID;

const notion = new Client({
	auth: NOTION_API_KEY,
});

const logger = createLogger({
	level: 'error',
	format: format.combine(
		format.timestamp(),
		format.json()
	),
	transports: [
		new transports.File({ filename: 'error.log' })
	]
});

export async function GET(request: NextRequest) {
	try {
		const filter = request.nextUrl.searchParams.get('filter') || '';
		const response = filter === '' ? await notion.databases.query({
			database_id: NOTION_PROMOTION_PAGE_ID || '',
			sorts: [{
				property: '프로모션 기간',
				direction: 'descending'
			}]
		}) : await notion.databases.query({
			database_id: NOTION_PROMOTION_PAGE_ID || '',
			sorts: [{
				property: '프로모션 기간',
				direction: 'descending'
			}],
			filter: {
				property: '분류',
				select: {
					equals: filter
				}
			}
		});

		return NextResponse.json(response, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			},
		});
	} catch (error) {
		logger.error('API 에러:', error);
		console.error(JSON.stringify(error));
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

export async function OPTIONS(request: NextRequest) {
	return NextResponse.json({}, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		},
	});
}