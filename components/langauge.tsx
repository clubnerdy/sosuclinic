"use client"

import Styles from '@styles/components/langauge.module.css';

export default function Langauge() {

    return (
        <div className={Styles.selector}>
            <div className={Styles.button}>
                <span className={Styles.text}>KR</span>
                <div>
                    <img src="/icons/arrow_down.svg" alt="langauge_selector" />
                </div>
            </div>

            <div className={Styles.list}>
                <span className={Styles.text}>KR</span>
                <span className={Styles.text}>EN</span>
            </div>
        </div>
    )
}