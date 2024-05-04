import React, { useState } from 'react'

import CoordinateInput from '../../../../components/constructors/CoordinateInput'
import ChartComponent from '../../../../components/ChartComponent'

import approximatePoints from '../../../../features/topic/PhysDataAnalysis/Approximation'

import style from './Approximation.module.scss'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

function createPoints(xValues, yValues) {
	const points = []
	for (let i = 0; i < xValues.length; i++) {
		points.push({ x: xValues[i], y: yValues[i] })
	}
	return points
}

const ApproximationPage = () => {
	const [yValues, setYValues] = useState([])
	const [xValues, setXValues] = useState([])
	const [approximationType, setApproximationType] = useState('Линейная функция')

	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const handleCoordinatesChange = (newYValues, newXValues) => {
		setYValues(newYValues)
		setXValues(newXValues)
		setDecision(false)
	}

	const handleApproximationChange = event => {
		setApproximationType(event.target.value)
	}

	const handleFind = () => {
		try {
			const points = createPoints(xValues, yValues)

			const solution = approximatePoints(points, approximationType)

			setSolution(solution)
			setDecision(true)
		} catch {}
	}

	return (
		<div>
			<h1>Аппроксимация: </h1>
			<div className={style['method-selection-container']}>
				<p>Выберите функцию:</p>
				<div className={style['method-option']}>
					<input
						type='radio'
						id='linear'
						name='approximationType'
						value='Линейная функция'
						checked={approximationType === 'Линейная функция'}
						onChange={handleApproximationChange}
					/>
					<label htmlFor='linear'>Линейная функция</label>
				</div>
				<div className={style['method-option']}>
					<input
						type='radio'
						id='quadratic'
						name='approximationType'
						value='Квадратный трехчлен'
						checked={approximationType === 'Квадратный трехчлен'}
						onChange={handleApproximationChange}
					/>
					<label htmlFor='quadratic'>Квадратный трехчлен</label>
				</div>
				<div className={style['method-option']}>
					<input
						type='radio'
						id='power'
						name='approximationType'
						value='Степенная функция'
						checked={approximationType === 'Степенная функция'}
						onChange={handleApproximationChange}
					/>
					<label htmlFor='power'>Степенная функция</label>
				</div>
				<div className={style['method-option']}>
					<input
						type='radio'
						id='exponential'
						name='approximationType'
						value='Показательная функция'
						checked={approximationType === 'Показательная функция'}
						onChange={handleApproximationChange}
					/>
					<label htmlFor='exponential'>Показательная функция</label>
				</div>
				<div className={style['method-option']}>
					<input
						type='radio'
						id='logarithmic'
						name='approximationType'
						value='Логарифмическая функция'
						checked={approximationType === 'Логарифмическая функция'}
						onChange={handleApproximationChange}
					/>
					<label htmlFor='logarithmic'>Логарифмическая функция</label>
				</div>
			</div>

			<h1>Конструктор:</h1>
			<CoordinateInput onCoordinatesChange={handleCoordinatesChange} />
			<button onClick={handleFind} className={style['solve-button']}>
				Найти
			</button>
			{decision && (
				<div className={style['solution-container']}>
					<h3>Формула:</h3>
					<Latex>{`$$${solution.original}$$`}</Latex>

					<h3>График:</h3>
					<ChartComponent
						xValues={xValues}
						yValues={yValues}
						functionString={solution.processed}
					/>
				</div>
			)}
		</div>
	)
}

export default ApproximationPage
