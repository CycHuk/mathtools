import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import topics from './config'

import style from './Home.module.scss'

const MethodList = ({ methods, isOpen }) => (
	<ul className={`${style.methodList} ${isOpen ? style.open : ''}`}>
		{methods.map((method, index) => (
			<li
				key={index}
				className={`${style.method} ${isOpen ? style.methodAppear : ''}`}
			>
				<Link to={method.url}>{method.name}</Link>
			</li>
		))}
	</ul>
)

const Topic = ({ topic, methods }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<div onClick={toggleOpen} className={style.topic}>
				{topic}
			</div>
			<MethodList methods={methods} isOpen={isOpen} />
		</div>
	)
}

const Home = () => {
	return (
		<section className={style.section}>
			<h2>Темы:</h2>
			{topics.map((topic, index) => (
				<Topic key={index} topic={topic.topic} methods={topic.methods} />
			))}
		</section>
	)
}

export default Home
