"use client"

import Styles from '@styles/components/popup.module.css';
import { useEffect, useState } from 'react';
import { shouldShowPopup } from '@utils/popup';
import PopupCard from './(frame)/popupCard';

export default function Popup() {
    const [popups, setPopups] = useState<any[]>([]) as any[];

    const getPopups = async () => {
        const response = await fetch('/api/notion/popups');
        const json = await response.json();
        const visiblePopups = json.filter(popup => shouldShowPopup(popup.id)).map(popup => ({
            ...popup,
            isVisible: true, // 각 팝업의 표시 상태 추가
        }));
        setPopups(visiblePopups);
    }

    const handleClose = (popupId = '') => {
        setPopups(popups.map(popup => popup.id === popupId ? { ...popup, isVisible: false } : popup));
    };

    useEffect(() => {
        (async () => {
            await getPopups();
        })();
    }, []);

    if (popups.every(popup => !popup.isVisible)) return null;

    return (
        <section className={Styles.popup}>
            {popups.map(popup => popup.isVisible && (
                <PopupCard key={popup.id} popup={popup} onClose={() => handleClose(popup.id)} />
            ))}
        </section>
    )
}