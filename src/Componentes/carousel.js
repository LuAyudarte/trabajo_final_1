import React, { useEffect, useRef } from "react";
import imagen1 from './IMG/Imagen4.png';
import imagen2 from './IMG/Imagen3.jpg';
import imagen3 from './IMG/Imagen2.jpg';
import './carousel.css';

function Carousel({ onClick }) {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current && sliderRef.current && thumbnailBorderRef.current && nextRef.current && prevRef.current) {
            const carouselDom = carouselRef.current;
            const sliderDom = sliderRef.current;
            const thumbnailBorderDom = thumbnailBorderRef.current;

            const next = nextRef.current;
            const prev = prevRef.current;

            const showSlider = (type) => {
                const sliderItemsDom = sliderDom.querySelectorAll('.item');
                const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

                if (type === 'next') {
                    sliderDom.appendChild(sliderItemsDom[0]);
                    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                    carouselDom.classList.add('next');
                } else {
                    sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                    carouselDom.classList.add('prev');
                }
                clearTimeout(runTimeOut);
                runTimeOut = setTimeout(() => {
                    carouselDom.classList.remove('next');
                    carouselDom.classList.remove('prev');
                }, 3000);

                clearTimeout(runNextAuto);
                runNextAuto = setTimeout(() => {
                    next.click();
                }, 7000);
            };

            let runTimeOut;
            let runNextAuto = setTimeout(() => {
                next.click();
            }, 7000);

            next.addEventListener('click', () => showSlider('next'));
            prev.addEventListener('click', () => showSlider('prev'));

            return () => {
                next.removeEventListener('click', () => showSlider('next'));
                prev.removeEventListener('click', () => showSlider('prev'));
                clearTimeout(runNextAuto);
                clearTimeout(runTimeOut);
            };
        }
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list" ref={sliderRef}>
                <div className="item">
                    <img src={imagen1} alt="Imagen 1" />
                    <div className="content">
                        <div className="title">SLIDER</div>
                        <div className="topic">ITEM 1</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button onClick={onClick}>VER MAS</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={imagen2} alt="Imagen 2" />
                    <div className="content">
                        <div className="title">SLIDER</div>
                        <div className="topic">ITEM 2</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button onClick={onClick}>VER MAS</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={imagen3} alt="Imagen 3" />
                    <div className="content">
                        <div className="title">SLIDER</div>
                        <div className="topic">ITEM 3</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button onClick={onClick}>VER MAS</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thumbnail" ref={thumbnailBorderRef}>
                <div className="item">
                    <img src={imagen1} alt="Imagen 1" />
                    <div className="content">
                        <div className="title">Titulo</div>
                        <div className="description">Descripción</div>
                    </div>
                </div>
                <div className="item">
                    <img src={imagen2} alt="Imagen 2" />
                    <div className="content">
                        <div className="title">Titulo</div>
                        <div className="description">Descripción</div>
                    </div>
                </div>
                <div className="item">
                    <img src={imagen3} alt="Imagen 3" />
                    <div className="content">
                        <div className="title">Titulo</div>
                        <div className="description">Descripción</div>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button id="prev" ref={prevRef}> {"<"} </button>
                <button id="next" ref={nextRef}> {">"} </button>
            </div>
            <div className="time" ref={timeRef}></div>
        </div>
    );
}

export default Carousel;
