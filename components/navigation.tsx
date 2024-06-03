"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Styles from '@styles/components/navigation.module.css';
import Langauge from '@components/langauge';
import Menu from '@components/(menu)/menu';

export default function Navigation() {
    const pathname = usePathname();
    const [localPathname, setLocalPathname] = useState(pathname);
    const [isScrolled, setIsScrolled] = useState(pathname !== '/' ? true : false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        if (localPathname !== '/') {
            return;
        }

        const position = window.scrollY;
        setIsScrolled(position > 0);
    };

    const handleClickMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    const initialScroll = () => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }

    useEffect(() => {
        setLocalPathname(pathname);
        setIsScrolled(pathname !== '/');
        setIsOpen(false);
    }, [pathname]);


    useEffect(() => {
        initialScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [[]]);

    return (
        <header className={`${Styles.header} ${isScrolled ? Styles.active : ''}`}>
            <Menu toggle={isOpen} setToggle={setIsOpen} />

            <div className={Styles.menu__button} onClick={handleClickMenuToggle}>
                <img src="/icons/button_navigation.svg" alt="button_navigation" />
            </div>

            <a href="/">
                <div className={Styles.logo}>
                    <img src="/icons/sosu_symbol.svg" alt="sosu_symbol" />
                    <img src="/icons/sosu_wordmark.svg" alt="sosu_wordmark" />
                </div>
            </a>

            <div className={Styles.right__side}>
                <Langauge />
            </div>
        </header>
    )
}