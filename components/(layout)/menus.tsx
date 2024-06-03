"use client"

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/components/(frame)/menu.swiper.css';
import AOS from 'aos';
import Styles from '@styles/components/(layout)/menus.module.css';
import Menu from '@components/(frame)/menu';

export default function Menus() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleLoadSwiper = (swiper) => {
        setSwiperInstance(swiper);
        const slides = swiper.slides;
        slides[2].classList.add('disable');
    };

    const handleChangeSwiperSlide = () => {
        const { activeIndex, slides } = swiperInstance;
        const targetIndex = activeIndex + 2;

        if (slides[targetIndex]) {
            slides[targetIndex].classList.add('disable');
        }
    }

    const handleReachEnd = () => {
        const { slides } = swiperInstance;
        slides.map(slide => slide.classList.remove('disable'));
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.header}>
                    <span className="title">주요 시술</span>
                </div>

                <div className={Styles.contents}
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1500"
                    data-aos-once="true">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            type: 'progressbar',
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView="auto"
                        onSwiper={handleLoadSwiper}
                        onSlideChangeTransitionEnd={handleChangeSwiperSlide}
                        onReachEnd={handleReachEnd}
                    >
                        <SwiperSlide>
                            <Menu
                                image="/images/frame/menu_1.png"
                                title="Signiture Wedding Planning"
                                subtitle="시그니처 웨딩 플래닝"
                                description="스튜디오 촬영 및 본식에서의 최고의 나로 거듭나기 위한 웨딩 프로그램입니다."
                                link="/signiture-wedding-planning"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Menu
                                image="/images/frame/menu_2.png"
                                title="Prime Tuneface"
                                subtitle="프라임 튠페이스"
                                description="개인 특성에 따라 맞춤 디자인과 핸드피스로 피부층에 정밀하게 타겟하여 전달하는 리프팅입니다."
                                link="/prime-tuneface"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Menu
                                image="/images/frame/menu_3.png"
                                title="Prime Ultherapy"
                                subtitle="프라임 울쎄라"
                                description="9 step 프로그램을 통해 울쎄라의 효과를 극대화한 강력한 리프팅입니다."
                                link="/prime-ultherapy"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Menu
                                image="/images/frame/menu_4.png"
                                title="Signiture Kysse Filler"
                                subtitle="시그니처 키스 필러"
                                description="개인의 얼굴에 맞게 자연스럽고 조화롭게 볼륨을 채워주는 필러입니다."
                                link="/signiture-kysse-filler"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}