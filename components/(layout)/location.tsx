import Button from '@components/(frame)/button';
import Styles from '@styles/components/(layout)/location.module.css';
import Link from 'next/link';

export default function Location() {

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <span className="title">오시는 길</span>
                    <p className={Styles.description}>서울시 성동구 상원1길 5 3층 (연무장길 초입)</p>
                </div>

                <div className={Styles.contents}>
                    <img src="/images/layout/location.png" alt="location" />

                    <Link href="https://map.naver.com/p/entry/place/1284629888?placePath=%2Fhome&c=15.00,0,0,0,dh" target="_blank" className={Styles.link}>
                        <Button title="네이버 지도로 보기" theme="warmgrey" />
                    </Link>
                </div>

                <Link href="/location" >
                    <Button title="자세히 보기" />
                </Link>
            </div>
        </div >
    );
}