"use client"

import { useEffect, useState } from 'react';
import Styles from '@styles/components/(layout)/promotionList.module.css';
import Promotion from '@components/(frame)/promotion';
import getCoverUrl from '@utils/notionCover';

export default function PromotionList() {
    const [filter, setFilter] = useState('');
    const [promotions, setPromotions] = useState([]);

    const getPromotions = async (filter = '') => {
        try {
            const response = await fetch('/api/notion/promotions?filter=' + filter);
            const json = await response.json();

            return json.results ?? [];
        } catch (error) {
            return [];
        }
    }

    const renderPromotions = (promotions = []) => {
        return promotions.map(promotion => {
            const { id, properties = {} } = promotion;
            const title = properties['이름']?.title[0]?.plain_text ?? '';
            const subtitle = properties['부제목']?.rich_text[0]?.plain_text ?? '';
            const description = properties['설명']?.rich_text[0]?.plain_text ?? '';
            const cover = getCoverUrl(promotion?.cover ?? '', id);
            const endAt = new Date(properties['프로모션 기간']?.date?.end).getTime();
            const today = new Date().getTime();

            return <Promotion
                key={id}
                image={cover}
                title={title}
                subtitle={subtitle}
                description={description}
                closed={endAt < today}
                link={`/promotion-detail/${id}`}
            />
        })
    }

    const handleClickFilter = (event) => {
        const buttons = document.querySelectorAll(`.${Styles.filter} button`);
        buttons.forEach(button => button.classList.remove(Styles.active));

        event.currentTarget.classList.add(Styles.active);
        setFilter(event.currentTarget.dataset.filter || '');
    }

    useEffect(() => {
        (async () => {
            const promotions = await getPromotions(filter);
            setPromotions(promotions);
        })();
    }, [filter]);

    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <h1 className={Styles.title}>프로모션</h1>
                    <p className={Styles.description}>
                        매달 진행되는 이벤트로 보다 합리적인 가격에 <br />
                        소수만의 프라임 시술을 경험해보세요.
                    </p>
                </div>

                <div className={Styles.filter}>
                    <button className={`${Styles.button} ${Styles.active}`} type="button" data-filter="" onClick={handleClickFilter}>
                        <span>ALL</span>
                    </button>

                    <button className={Styles.button} type="button" data-filter="package" onClick={handleClickFilter}>
                        <span>PACKAGE</span>
                    </button>

                    <button className={Styles.button} type="button" data-filter="prime line" onClick={handleClickFilter}>
                        <span>PRIME LINE</span>
                    </button>

                    <button className={Styles.button} type="button" data-filter="seasonal" onClick={handleClickFilter}>
                        <span>SEASONAL</span>
                    </button>

                    <button className={Styles.button} type="button" data-filter="weekend" onClick={handleClickFilter}>
                        <span>WEEKEND</span>
                    </button>
                </div>

                <div className={Styles.list}>
                    {renderPromotions(promotions)}
                </div>
            </div>
        </section >
    );
}