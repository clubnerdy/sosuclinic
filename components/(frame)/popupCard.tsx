"use client"

import Link from 'next/link';
import Styles from '@styles/components/(frame)/popup.module.css';
import getCoverUrl from '@utils/notionCover';
import { hidePopupForADay } from '@utils/popup';

export default function PopupCard({ popup, onClose }) {
    const { id, properties = {} } = popup as any;
    const image = getCoverUrl(properties['대표 이미지'].files[0], id);

    const handleDismissForADay = () => {
        hidePopupForADay(popup.id);
        onClose();
    };

    return (
        <article key={id} className={Styles.card}>
            <button className={Styles.button__cancel} type="button" onClick={onClose}></button>

            <div className={Styles.card__contents}>
                <img src={image} alt="popup" />
            </div>

            <div className={Styles.card__footer}>
                <button className={Styles.button__noshow} type="button" onClick={handleDismissForADay}>하루동안 보지 않기</button>
                <Link href={properties['상세페이지 링크'].url ?? '/'} className={Styles.button__show} type="button">
                    <span>DETAILS</span>
                    <img src="/icons/arrow_right.svg" alt="DETAILS" />
                </Link>
            </div>
        </article>
    )
};