import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const PreviewPage = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Прикладные математические методы</h1>
			<div className={style.content}>
				<p>
					Этот сервис предоставляет возможность использовать прикладные
					математические методы для решения различных задач. Идеально подходит
					для студентов, исследователей и разработчиков, которым необходимы
					математические вычисления в их проектах.
				</p>
			</div>
			<div className={style.buttons}>
				<Link to='/calc' className={style.tryButton} style={{ color: 'white' }}>
					Попробовать
				</Link>
				<Link
					to='/docs'
					className={style.docsButton}
					style={{ color: 'white' }}
				>
					Документация
				</Link>
			</div>
		</div>
	)
}

export default PreviewPage
