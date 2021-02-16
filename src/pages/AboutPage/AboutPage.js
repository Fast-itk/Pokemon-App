import React from 'react'
import cls from './AboutPage.module.scss'

const AboutPage = () => {
    return (
        <div className={cls.AboutPage}>
            <div className={cls.about}>
                <h1>Информация о проекте</h1>
                <p>Тестовое задание для компании Blitz Studio</p>
            </div>
        </div>
    )
}

export default AboutPage