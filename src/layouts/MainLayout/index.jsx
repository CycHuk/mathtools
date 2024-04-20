import React from 'react'

import Header from '../../components/header'

import style from './mainLayout.module.scss'

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={style.content}>{children}</main>
			<footer className={style.footer}>Все права защищены © 2024</footer>
		</>
	)
}

export default MainLayout
