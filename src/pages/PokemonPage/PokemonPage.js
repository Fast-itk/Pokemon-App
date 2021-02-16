import React, { useContext, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import { DetailContext } from '../../context/detail/detailContext'
import cls from './PokemonPage.module.scss'
const PokemonPage = ({match}) => {

    const detail = useContext(DetailContext)
    const {abilities, baseExpirience, height, frontImage, stats, types, loading, getDetail} = detail

    useEffect(() => {
        getDetail(match.params.name)
    }, [])

    if (loading) {
        return (
            <div className={cls.load}>
                <Loading />
            </div>
        )
    }

    const abil = abilities.map((item, i) => {
        return (
            <span key={i}> {item.ability.name} </span>
        )
    })

    const statistic = stats.map((stat, i) => {
        return (
            <p key={i}>{stat.stat.name} - {stat.base_stat} </p> 
        )
    })

    const pokTypes = types.map((item, i) => {
        return (
            <span key={i}>{item.type.name} </span>
        )
    })  

    return (
        <div className={cls.PokemonPage}>
            <h1>Информация о покемоне: {match.params.name}</h1>
            <h2>Характеристики</h2>
            <div className={cls.details}>
                <div className={cls.pokImage}>
                    <img src={frontImage} alt={match.params.name} />
                    
                </div>
                <div className={cls.aboutPok}>
                    <p>Способности: {abil}</p>
                    <p>Базовый опыт: {baseExpirience}</p>
                    <p>Рост: {height}</p>
                    <p>Тип: {pokTypes}</p>
                    <hr />
                    <div>Основные показатели: {statistic}</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPage