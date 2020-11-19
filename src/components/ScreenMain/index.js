import React from 'react';
import Header from 'components/Header';

const ScreenMain = () => (
    <div className="main-screen">
        <Header />

        <div className="container">
            <div className="main-screen-content">
                <div className="block-left">
                    <h2 className="title">
                        Онлайн-школа
                        английского языка
                        english 4 u
                    </h2>
                    <ul className="description">
                        <li>занятия с <span>лучшими преподаватилями</span></li>
                        <li>занятия с <span>native speakers</span></li>
                        <li>система, которая позволить <span>заговорить каждому</span></li>
                    </ul>
                    <span className="book-lesson">запишись на первый урок бесплатно!</span>
                    <span className="button">записаться на бесплатный урок</span>
                </div>
                <div className="block-right">
                    <div className="image"></div>
                </div>
            </div>
        </div>
    </div>
);

export default ScreenMain;
