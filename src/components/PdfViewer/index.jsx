import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import styles from './PdfViewer.module.scss'

const MyPdfViewer = ({ pdfUrl, isOpen, closeModal, scroll }) => {
	const [scrollLevel, setScroll] = useState(scroll)
	const [numPages, setNumPages] = useState(null)
	const [scale, setScale] = useState(1)
	const canvasEls = useRef([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadingTask = window.pdfjsLib.getDocument(pdfUrl)
		loadingTask.promise.then(pdf => {
			setNumPages(pdf.numPages)
			setLoading(false)
		})
	}, [pdfUrl])

	useEffect(() => {
		if (!loading) {
			for (let i = 0; i < numPages; i++) {
				const canvas = canvasEls.current[i]
				const renderTask = window.pdfjsLib
					.getDocument(pdfUrl)
					.promise.then(pdf => {
						return pdf.getPage(i + 1)
					})
					.then(page => {
						const viewport = page.getViewport({ scale })
						const canvasContext = canvas.getContext('2d')
						canvas.height = viewport.height
						canvas.width = viewport.width
						const renderContext = {
							canvasContext,
							viewport,
						}
						page.render(renderContext)
					})
					.then(_ => {
						const modal = document.getElementById('treasd')
						if (modal) {
							modal.scrollTop = scrollLevel
						}
					})
			}
		}
	}, [loading, numPages, pdfUrl, scale, scrollLevel])

	const handleZoomIn = () => {
		setScale(scale + 0.1)
	}

	const handleZoomOut = () => {
		if (scale > 0.1) {
			setScale(scale - 0.1)
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			className={styles.modal}
			id='treasd'
		>
			<div className={styles.pdfViewerHeader}>
				<div className={styles.zoomButtons}>
					<button className={styles.zoomButton} onClick={handleZoomOut}>
						Уменьшить
					</button>
					<button className={styles.zoomButton} onClick={handleZoomIn}>
						Увеличить
					</button>
				</div>
				<button className={styles.closeButton} onClick={closeModal}>
					Закрыть
				</button>
			</div>
			<div className={styles.pdfViewerContainer}>
				{loading && <span>Loading...</span>}
				{!loading &&
					Array.from(Array(numPages).keys()).map(index => (
						<div key={index} className={styles.pdfPage}>
							<canvas
								ref={ref => (canvasEls.current[index] = ref)}
								className={styles.pdfViewerCanvas}
							/>
						</div>
					))}
			</div>
		</Modal>
	)
}

export default MyPdfViewer
