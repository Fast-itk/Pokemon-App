import React from 'react'
import { Link } from 'react-router-dom'
import cls from './PokemonCard.module.scss'

const PokemonCard = ({ name, image }) => {
    return (
        <div className={cls.PokemonCard}>
            <div className={cls.cardTop}>
                <img className={cls.imgFluid} src={ image } />
            </div>
            <div className={cls.cardBottom}>
                <h3>{ name }</h3>
                <Link to={`/pokemon/${name}`}>
                    <button className={cls.btn}>Подробнее</button>
                </Link>
            </div>
        </div>
    )
}

export default PokemonCard