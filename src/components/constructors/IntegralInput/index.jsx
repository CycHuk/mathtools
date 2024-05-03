import React, { useState } from 'react'
import styles from './IntegralInput.module.scss'

const IntegralInput = ({ onUpdate }) => {
	const [integral, setIntegral] = useState('')
	const [lowerBound, setLowerBound] = useState('')
	const [upperBound, setUpperBound] = useState('')

	const handleUpdate = () => {
		if (integral && onUpdate) {
			onUpdate({
				expression: integral,
				lowerBound: lowerBound,
				upperBound: upperBound,
			})
		}
	}

	return (
		<div className={styles.integralInputContainer}>
			<div className={styles.integralInputContainer}>
				<label htmlFor='integral'>∫</label>
				<input
					type='text'
					id='integral'
					value={integral}
					onChange={e => setIntegral(e.target.value)}
					onBlur={handleUpdate}
				/>
				<span>dx</span>
			</div>
			<div
				className={`${styles.integralInputContainer} ${styles.lowerBoundInput}`}
			>
				<label htmlFor='lowerBound'>Нижний предел:</label>
				<input
					type='text'
					id='lowerBound'
					value={lowerBound}
					onChange={e => setLowerBound(e.target.value)}
					onBlur={handleUpdate}
				/>
			</div>
			<div
				className={`${styles.integralInputContainer} ${styles.upperBoundInput}`}
			>
				<label htmlFor='upperBound'>Верхний предел:</label>
				<input
					type='text'
					id='upperBound'
					value={upperBound}
					onChange={e => setUpperBound(e.target.value)}
					onBlur={handleUpdate}
				/>
			</div>
		</div>
	)
}

export default IntegralInput
