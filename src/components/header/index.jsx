import React from 'react'

import style from './header.module.scss'

import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={style.header}>
			<Link to='/'>
				<h1>Математические методы</h1>
			</Link>
			<nav>
				<ul className={style.navList}>
					<li>
						<Link to='/calc'>Калькулятор</Link>
					</li>
					<li>
						<Link to='/docs'>Документация</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
