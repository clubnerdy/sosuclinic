import { Metadata } from 'next';
import Styles from '@styles/pages/main.module.css';
import Brandstory from '@components/(layout)/brandstory';
import Menus from '@components/(layout)/menus';
import Experience from '@components/(layout)/experience';
import Location from '@components/(layout)/location';
import Instagram from '@components/(layout)/instagram';
import Popup from '@components/popup';
import Visual from '@components/(layout)/visual';

export const metadata: Metadata = {
    title: "SOSU CLINIC | 소수의원",
};

export default function page(): JSX.Element {

    return (
        <>
            <Popup />

            <main className={Styles.main}>
                <Visual />

                <Brandstory />

                <Menus />

                <Experience />

                <Location />
            </main>
        </>
    );
}