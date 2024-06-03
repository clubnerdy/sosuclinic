import '../styles/global.css';
import 'aos/dist/aos.css';
import { Metadata, Viewport } from 'next'
import Navigation from '../components/navigation';
import Footer from '@components/footer';
import Remote from '@components/remote';

export const metadata: Metadata = {
	metadataBase: new URL('https://www.sosuclinic.com'),
	title: {
		template: "%s | SOSU CLINIC",
		default: "SOSU CLINIC",
	},
	description: "성수동 위치, 입술필러, 울쎄라, 튠페이스, 프라이빗 VIP룸",
	keywords: '피부과, 성수동 피부과, 울쎄라, 입술 필러, 튠페이스, 튠바디, 신부 관리',
	authors: [{ name: '소수의원, SOSU Clinic' }],
	openGraph: {
		title: '소수의원, SOSU Clinic',
		description: 'SOSU Clinic - 당신의 빛을 발견하세요',
		type: 'website',
		url: 'https://www.sosuclinic.com/',
		images: [
			{
				url: 'https://www.sosuclinic.com/images/open_graph.png',
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: '소수의원, SOSU Clinic',
		description: 'SOSU Clinic - 당신의 빛을 발견하세요',
		images: ['https://www.sosuclinic.com/images/open_graph.png'],
	},
	icons: [
		{
			url: '/favicon.ico',
			type: 'image/x-icon',
		},
	],
	verification: {
		other: {
			'naver-site-verification': '50d2aac6457b369f4755c4f53431d67854a71bd5',
		},
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<head >
				<link rel="icon" href="/favicon.ico" />

				<script async src="https://www.googletagmanager.com/gtag/js?id=G-5W3LVGEHYR"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-5W3LVGEHYR');
					`,
					}}
				/>
			</head>
			<body >
				<Navigation />
				<Remote />
				{children}
				<Footer />
			</body>
		</html>
	)
}
