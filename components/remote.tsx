import Styles from '@styles/components/remote.module.css';
import Link from 'next/link';

export default function Remote() {

    return (
        <div className={Styles.remote}>
            <Link href="/schedule" className={Styles.item}>
                <img src="/icons/nav_schedule.svg" alt="진료 일정" />
                <span className={Styles.text}>진료 일정</span>
            </Link>

            <Link href="/location" className={Styles.item}>
                <img src="/icons/nav_location.svg" alt="오시는 길" />
                <span className={Styles.text}>오시는 길</span>
            </Link>

            {/* 네이버 예약 주소 변경으로 링크 수정 */}

            {/* <Link href="https://booking.naver.com/booking/13/bizes/1129314/items/5822033/" target="_blank" className={Styles.item}>
                <img src="/icons/nav_naver.svg" alt="네이버 예약" />
                <span className={Styles.text}>네이버 예약</span>
            </Link> */}

            <Link href="https://booking.naver.com/booking/13/bizes/1132902/items/5837483/" target="_blank" className={Styles.item}>
                <img src="/icons/nav_naver.svg" alt="네이버 예약" />
                <span className={Styles.text}>네이버 예약</span>
            </Link>

            <Link href="http://pf.kakao.com/_ItxhJG" target="_blank" className={Styles.item}>
                <img src="/icons/nav_kakao.svg" alt="카카오문의" />
                <span className={Styles.text}>카카오문의</span>
            </Link>

            <Link href="https://www.instagram.com/sosuclinic/" target="_blank" className={Styles.item}>
                <img src="/icons/nav_instagram.svg" alt="인스타그램" />
                <span className={Styles.text}>인스타그램</span>
            </Link>
        </div>
    )
}