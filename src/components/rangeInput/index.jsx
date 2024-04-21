// RangeInput.js

import React, { useState } from 'react'
import styles from './RangeInput.module.scss'

const RangeInput = ({ onRangeChange }) => {
	const [start, setStart] = useState('')
	const [end, setEnd] = useState('')

	const handleStartChange = event => {
		const value = event.target.value
		setStart(value)
		onRangeChange(value, end)
	}

	const handleEndChange = event => {
		const value = event.target.value
		setEnd(value)
		onRangeChange(start, value)
	}

	return (
		<div className={styles.rangeInputContainer}>
			<label htmlFor='startInput' className={styles.rangeInputLabel}>
				Начальное значение:
			</label>
			<input
				type='number'
				id='startInput'
				className={styles.rangeInput}
				value={start}
				onChange={handleStartChange}
			/>
			<label htmlFor='endInput' className={styles.rangeInputLabel}>
				Конечное значение:
			</label>
			<input
				type='number'
				id='endInput'
				className={styles.rangeInput}
				value={end}
				onChange={handleEndChange}
			/>
		</div>
	)
}

export default RangeInput
