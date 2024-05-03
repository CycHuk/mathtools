import React, { useState } from 'react'
import PdfViewer from '../../components/PdfViewer'
import style from './Docs.module.scss'

const topics = [
	{
		id: 1,
		name: 'Математические и численные методы решения задач линейной алгебры',
		pdfUrl: './pdf/topic1.pdf',
	},
	{
		id: 2,
		name: 'Решение нелинейных уравнений и их систем',
		pdfUrl: './pdf/topic2.pdf',
	},
	{
		id: 3,
		name: 'Задача обработки экспериментальных данных физических экспериментов',
		pdfUrl: './pdf/topic3.pdf',
	},
	{
		id: 4,
		name: 'Численное интегрирование',
		pdfUrl: './pdf/topic4.pdf',
	},
	{
		id: 5,
		name: 'Численное дифференцирование',
		pdfUrl: './pdf/topic5.pdf',
	},
	{
		id: 6,
		name: 'Решение ОДУ',
		pdfUrl: './pdf/topic6.pdf',
	},
]

const DocsPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [selectedTopic, setSelectedTopic] = useState(null)

	const openModal = topic => {
		setSelectedTopic(topic)
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setSelectedTopic(null)
		setModalIsOpen(false)
	}

	const Topic = ({ topic }) => (
		<div
			className={`${style.topic} ${
				selectedTopic === topic.id ? style.selected : ''
			}`}
			onClick={() => openModal(topic)}
		>
			<h3>{topic.name}</h3>
		</div>
	)

	return (
		<section className={style.section}>
			<h2>Документация:</h2>
			{topics.map(topic => (
				<Topic key={topic.id} topic={topic} />
			))}

			{selectedTopic && (
				<PdfViewer
					pdfUrl={selectedTopic.pdfUrl}
					isOpen={modalIsOpen}
					closeModal={closeModal}
				/>
			)}
		</section>
	)
}

export default DocsPage
