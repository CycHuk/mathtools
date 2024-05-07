import React, { useState } from 'react'
import PdfViewer from '../../components/PdfViewer'
import topics from './config'

import style from './Docs.module.scss'

const MethodList = ({ methods, isOpen, openModal }) => (
	<ul className={`${style.methodList} ${isOpen ? style.open : ''}`}>
		{methods.map((method, index) => (
			<li
				key={index}
				className={`${style.method} ${isOpen ? style.methodAppear : ''}`}
				onClick={() => openModal(method.url)} // Открываем модальное окно с PDF при клике на метод
			>
				{method.name}
			</li>
		))}
	</ul>
)

const Topic = ({ topic, methods, openModal }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<div onClick={toggleOpen} className={style.topic}>
				{topic}
			</div>
			<MethodList methods={methods} isOpen={isOpen} openModal={openModal} />
		</div>
	)
}

const DocsPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [pdfUrl, setPdfUrl] = useState(null)

	const openModal = url => {
		setPdfUrl(url)
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	return (
		<section className={style.section}>
			<h2>Документация:</h2>
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
				/>
			)}
		</section>
	)
}

export default DocsPage
