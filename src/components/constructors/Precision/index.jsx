// PrecisionComponent.js

import React from 'react'
import style from './Precision.module.scss'

const PrecisionComponent = ({ onUpdate, precision }) => {
	const handlePrecisionChange = e => {
		const newPrecision = parseFloat(e.target.value)
		onUpdate(newPrecision)
	}

	return (
		<div className={style.precisionContainer}>
			<label htmlFor='precisionInput' className={style.precisionLabel}>
				Точность:
			</label>
			<input
				type='number'
				id='precisionInput'
				value={precision}
				onChange={handlePrecisionChange}
				className={style.precisionInput}
			/>
		</div>
	)
}

export default PrecisionComponent
