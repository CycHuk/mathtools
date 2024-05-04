import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import { usePdf } from 'react-pdf-js'
import styles from './PdfViewer.module.scss'

const MyPdfViewer = ({ pdfUrl, isOpen, closeModal }) => {
	const [page, setPage] = useState(1)
	const [pages, setPages] = useState(null)
	const [scale, setScale] = useState(1.6)
	const canvasEl = useRef(null)
	const [loading, numPages] = usePdf({
		file: pdfUrl,
		page,
		canvasEl,
		scale,
	})

	useEffect(() => {
		setPages(numPages)
	}, [numPages])

	const handleZoomIn = () => {
		setScale(scale + 0.1)
	}

	const handleZoomOut = () => {
		if (scale > 0.1) {
			setScale(scale - 0.1)
		}
	}

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}

	const handleNextPage = () => {
		if (page < pages) {
			setPage(page + 1)
		}
	}

	const handleDownloadPdf = () => {
		// Создай ссылку для скачивания PDF
		const link = document.createElement('a')
		link.href = pdfUrl
		link.download = 'document.pdf' // Имя файла для скачивания
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const renderPagination = () => {
		if (!pages) {
			return null
		}
		const previousButton = (
			<button
				className={styles.pdfViewerButton}
				onClick={handlePreviousPage}
				disabled={page === 1}
			>
				Предыдущая
			</button>
		)
		const nextButton = (
			<button
				className={styles.pdfViewerButton}
				onClick={handleNextPage}
				disabled={page === pages}
			>
				Следующая
			</button>
		)
		return (
			<div className={styles.pdfViewerPagination}>
				{previousButton}
				<span>{`Страница ${page} из ${pages}`}</span>
				{nextButton}
			</div>
		)
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
			<div className={styles.pdfViewerContainer}>
				{loading && <span>Loading...</span>}
				<div className={styles.pdfViewerContent}>
					<div className={styles.pdfViewerControls}>
						<div className={styles.pdfViewerZoomButtons}>
							<button className={styles.pdfViewerButton} onClick={handleZoomIn}>
								Увеличить
							</button>
							<button
								className={styles.pdfViewerButton}
								onClick={handleZoomOut}
							>
								Уменьшить
							</button>
						</div>
						<div className={styles.pdfViewerDownloadButton}>
							<button
								className={styles.pdfViewerButton}
								onClick={handleDownloadPdf}
							>
								Скачать PDF
							</button>
						</div>
					</div>
					<div className={styles.pdfViewerCanvasWrapper}>
						<canvas ref={canvasEl} className={styles.pdfViewerCanvas} />
					</div>
					{renderPagination()}
				</div>
			</div>
		</Modal>
	)
}

export default MyPdfViewer
