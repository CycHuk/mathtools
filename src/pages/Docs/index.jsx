import React, { useState } from 'react'
import PdfViewer from '../../components/PdfViewer'
import topics from './config'

import style from './Docs.module.scss'

const VarietyList = ({ varieties, openModal }) => (
	<ul className={style.varietyList}>
		{varieties.map((variety, index) => (
			<li
				key={index}
				className={style.variety}
				onClick={() => openModal(variety)}
			>
				{variety.name}
			</li>
		))}
	</ul>
)

const Method = ({ method, openModal }) => {
	const [isMethodOpen, setIsMethodOpen] = useState(false)

	const toggleMethodOpen = () => {
		setIsMethodOpen(!isMethodOpen)
	}

	return (
		<div className={style.method}>
			<div onClick={toggleMethodOpen} className={style.methodName}>
				{method.topic}
			</div>
			{isMethodOpen && (
				<VarietyList varieties={method.variety} openModal={openModal} />
			)}
		</div>
	)
}

const Topic = ({ topic, methods, openModal }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={style.topicContainer}>
			<div onClick={toggleOpen} className={style.topic}>
				{topic}
			</div>
			{isOpen &&
				methods.map((method, index) => (
					<Method key={index} method={method} openModal={openModal} />
				))}
		</div>
	)
}

const DocsPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [pdfUrl, setPdfUrl] = useState(null)
	const [scroll, setScroll] = useState(null)

	const openModal = variety => {
		setPdfUrl(variety.url)
		setScroll(variety.scrollLevel)
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	return (
		<section className={style.section}>
			<h2 className={style.h2}>Документация:</h2>
			{topics.map((topic, index) => (
				<Topic
					key={index}
					topic={topic.topic}
					methods={topic.methods}
					openModal={openModal}
				/>
			))}

			{modalIsOpen && (
				<PdfViewer
					pdfUrl={pdfUrl}
					isOpen={modalIsOpen}
					closeModal={closeModal}
					scroll={scroll}
				/>
			)}
		</section>
	)
}

export default DocsPage
