import React, { useState } from 'react'
import style from './LinearSystems.module.scss'

const MatrixConstructor = ({ onUpdate }) => {
	const [size, setSize] = useState(3)
	const [equations, setEquations] = useState(
		Array.from({ length: size }, () => new Array(size).fill(0))
	)
	const [constants, setConstants] = useState(new Array(size).fill(0))

	const handleChangeEquation = (event, rowIndex, colIndex) => {
		const newValue =
			event.target.value.trim() === '' ? 0 : parseFloat(event.target.value)
		const newEquations = equations.map((row, i) =>
			i === rowIndex
				? row.map((cell, j) => (j === colIndex ? newValue : cell))
				: row
		)
		setEquations(newEquations)
		onUpdate(newEquations, constants)
	}

	const handleChangeConstants = (event, index) => {
		const newValue = parseFloat(event.target.value)
		const newConstants = [...constants]
		newConstants[index] = newValue
		setConstants(newConstants)
		onUpdate(equations, newConstants)
	}

	const handleChangeSize = event => {
		const newSize = parseInt(event.target.value)
		setSize(newSize)
		const newEquations = Array.from({ length: newSize }, () =>
			new Array(newSize).fill(0)
		)
		const newConstants = Array(newSize).fill(0)
		setEquations(newEquations)
		setConstants(newConstants)
		onUpdate(newEquations, newConstants)
	}

	return (
		<div className={style.constructorColumn}>
			<h2>Конструктор</h2>
			<label htmlFor='matrixSize'>Размер:</label>
			<select
				className={style.matrixSize}
				onChange={handleChangeSize}
				value={size}
			>
				{[...Array(9)].map((_, index) => (
					<option key={index} value={index + 2}>
						{index + 2}x{index + 2}
					</option>
				))}
			</select>
			<div className={style.matrixContainer}>
				<table>
					<tbody>
						{equations.map((row, i) => (
							<tr key={i}>
								{row.map((cell, j) => (
									<React.Fragment key={j}>
										<td>
											<input
												type='number'
												value={cell}
												onChange={event => handleChangeEquation(event, i, j)}
												className={style.equationCell}
											/>
										</td>
										{j !== size - 1 && (
											<td>
												x<sub>{j + 1}</sub>+
											</td>
										)}
									</React.Fragment>
								))}
								<td>
									x<sub>{size}</sub>
								</td>
								<td>=</td>
								<td>
									<input
										type='number'
										value={constants[i]}
										onChange={event => handleChangeConstants(event, i)}
										className={style.equationCell}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MatrixConstructor
