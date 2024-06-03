"use client"

import { useState } from 'react';
import Styles from '@styles/components/(menu)/menu.module.css';
import Menus from '@components/(menu)/menu.json';
import MenuItem from '@components/(menu)/menuItem';
import Link from 'next/link';

interface Menu {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ toggle, setToggle }: Menu) {
    const [selectedFirst, setSelectedFirst] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null);

    const handleClickFirstMenu = (menu) => {
        setSelectedFirst(menu);
        setSelectedSecond(null);
    };

    const handleClickSecondMenu = (submenu) => {
        setSelectedSecond(submenu);
    };

    const handleClickMenuMove = (link = '') => {
        setToggle(false);
        setSelectedFirst(null);
        setSelectedSecond(null);

        if (link !== '') {
            window.location.href = link;
        }
    }

    const handleClickMenuBack = () => {
        if (selectedSecond !== null) {
            setSelectedSecond(null);
        } else if (selectedFirst !== null) {
            setSelectedFirst(null);
        }
    }

    return (
        <div className={`${Styles.container} ${toggle ? Styles.active : ''}`}>
            <div className={Styles.header}>
                <a href="/">
                    <div>
                        <img src="/icons/sosu_wordmark_black.svg" alt="sosu_wordmark_black" />
                    </div>
                </a>

                <div className={Styles.cancel__btn} onClick={() => handleClickMenuMove()}>
                    <img src="/icons/button_close.svg" alt="button_close" />
                </div>
            </div>

            <div className={Styles.contents}>
                <ul className={Styles.list}>
                    {Menus.map((menu, index) => (
                        <MenuItem
                            key={index}
                            title={menu.title}
                            subtitle={menu.subtitle}
                            isChild={menu?.children ? true : false}
                            isActive={selectedFirst === menu}
                            isDisabled={selectedFirst && selectedFirst !== menu}
                            onClick={() => menu?.children ? handleClickFirstMenu(menu) : handleClickMenuMove(menu.link)}
                        />
                    ))}
                </ul>

                {selectedFirst && (
                    <>
                        <div className={Styles.line}></div>

                        <ul className={Styles.list}>
                            {selectedFirst ? (
                                <div className={Styles.back} onClick={handleClickMenuBack}>
                                    <img src="/icons/arrow_left.svg" alt="arrow_left" />
                                    <span>BACK</span>
                                </div>
                            ) : ''}

                            {selectedFirst.children?.map((child, index) => (
                                <MenuItem
                                    key={index}
                                    title={child.title}
                                    subtitle={child.subtitle}
                                    isChild={child?.children ? true : false}
                                    isActive={selectedSecond === child}
                                    isDisabled={selectedSecond && selectedSecond !== child}
                                    onClick={() => child?.children ? handleClickSecondMenu(child) : handleClickMenuMove(child.link)}
                                />
                            ))}
                        </ul>
                    </>
                )}

                {selectedSecond && (
                    <>
                        <div className={Styles.line}></div>

                        <ul className={Styles.list}>
                            {selectedSecond ? (
                                <div className={Styles.back} onClick={handleClickMenuBack}>
                                    <img src="/icons/arrow_left.svg" alt="arrow_left" />
                                    <span>BACK</span>
                                </div>
                            ) : ''}

                            {selectedSecond.children?.map((child, index) => (
                                <MenuItem
                                    key={index}
                                    title={child.title}
                                    subtitle={child.subtitle}
                                    isChild={false}
                                    onClick={() => handleClickMenuMove(child.link)}
                                />
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <div className={Styles.footer}>
                <Link href="https://www.instagram.com/sosuclinic/" target='_blank' className={Styles.soical}>
                    <img src="/icons/Instagram.svg" alt="Instagram" />
                </Link>

                {/* 네이버 예약 주소 변경으로 링크 주소 변경 */}
                
                {/* <Link href="https://booking.naver.com/booking/13/bizes/1129314/items/5822033/" target='_blank' className={Styles.soical}>
                    <img src="/icons/Naver.svg" alt="Naver" />
                </Link> */}

                <Link href="https://booking.naver.com/booking/13/bizes/1132902/items/5837483/" target='_blank' className={Styles.soical}>
                    <img src="/icons/Naver.svg" alt="Naver" />
                </Link>

                <Link href="http://pf.kakao.com/_ItxhJG" target='_blank' className={Styles.soical}>
                    <img src="/icons/Kakao.svg" alt="Kakao" />
                </Link>

                <Link href="#" target='_blank' className={Styles.soical}>
                    <img src="/icons/YouTube.svg" alt="Youtube" />
                </Link>

                <Link href="#" target='_blank' className={Styles.soical}>
                    <img src="/icons/TikTok.svg" alt="TikTok" />
                </Link>
            </div>
        </div>
    )
}