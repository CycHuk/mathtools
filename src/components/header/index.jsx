import React from 'react'

import style from './header.module.scss'

import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={style.header}>
			<h1>Математические методы</h1>
			<nav>
				<ul className={style.navList}>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>
						<Link to='/about'>О нас</Link>
					</li>
					<li>
						<Link to='/contact'>Контакты</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
