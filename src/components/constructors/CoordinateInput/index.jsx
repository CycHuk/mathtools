import React, { useState } from 'react'
import style from './CoordinateInput.module.scss'

const CoordinateInput = ({ onCoordinatesChange }) => {
	const [size, setSize] = useState(2)
	const [yValues, setYValues] = useState(new Array(size).fill(0))
	const [xValues, setXValues] = useState(new Array(size).fill(0))

	const handleSizeChange = event => {
		const newSize = parseInt(event.target.value)
		setSize(newSize)
		setYValues(new Array(newSize).fill(0))
		setXValues(new Array(newSize).fill(0))
	}

	const handleYValueChange = (index, value) => {
		const newYValues = [...yValues]
		newYValues[index] = value
		setYValues(newYValues)
		onCoordinatesChange(newYValues, xValues)
	}

	const handleXValueChange = (index, value) => {
		const newXValues = [...xValues]
		newXValues[index] = value
		setXValues(newXValues)
		onCoordinatesChange(yValues, newXValues)
	}

	return (
		<div className={style.container}>
			<label className={style.label} htmlFor='size'>
				Количество:{size}
			</label>
			<input
				className={style.input}
				type='range'
				id='size'
				name='size'
				min='2'
				max='10'
				value={size}
				onChange={handleSizeChange}
			/>
			<table className={style.table}>
				<thead>
					<tr>
						<th>Y </th>
						<th>X </th>
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: size }, (_, index) => (
						<tr key={index}>
							<td>
								<input
									type='number'
									value={yValues[index]}
									onChange={e =>
										handleYValueChange(index, parseFloat(e.target.value))
									}
								/>
							</td>
							<td>
								<input
									type='number'
									value={xValues[index]}
									onChange={e =>
										handleXValueChange(index, parseInt(e.target.value))
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CoordinateInput
