import React, { useState } from 'react'
import CoordinateInput from '../../../../components/constructors/CoordinateInput'
import localInterpolation from '../../../../features/topic/PhysDataAnalysis/Interpolation'
import {
	evaluateFunction,
	restorePowerOperator,
} from '../../../../features/topic/NonlinearEquations/functions'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

import style from './Interpolation.module.scss'

function combineAndSortObjects(arr) {
	const combinedObjects = arr.reduce((acc, obj) => {
		const existingObj = acc.find(item => item.name === obj.name)
		if (existingObj) {
			Object.assign(existingObj, obj)
		} else {
			acc.push(obj)
		}
		return acc
	}, [])

	const sortedObjects = combinedObjects.sort(
		(a, b) => parseFloat(a.name) - parseFloat(b.name)
	)

	return sortedObjects
}

const getInterpolatedFunction = (x, solution) => {
	for (let i = 0; i < solution.length; i++) {
		const range = solution[i][1]
		if (x >= range[0] && x <= range[1]) {
			return restorePowerOperator(solution[i][0])
		}
	}
	return null
}

const InterpolationPage = () => {
	const [yValues, setYValues] = useState([])
	const [xValues, setXValues] = useState([])
	const [interpolationType, setInterpolationType] = useState(2)
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const [dataGraph, setDataGraph] = useState([])

	const handleInterpolationTypeChange = event => {
		setInterpolationType(parseInt(event.target.value))
		setDecision(false)
	}

	const handleCoordinatesChange = (newYValues, newXValues) => {
		setYValues(newYValues)
		setXValues(newXValues)
		setDecision(false)
	}

	const drawGraph = solution => {
		let data = xValues.map((x, index) => ({
			x: x,
			y: yValues[index],
		}))

		let functionData = []

		for (let x = Math.min(...xValues); x <= Math.max(...xValues); x += 0.01) {
			console.log(x)
			functionData.push({
				x: x,
				y: evaluateFunction(getInterpolatedFunction(x, solution), x),
			})
		}

		functionData.forEach(obj => {
			obj.x = Math.round(obj.x * 100) / 100
		})
		data.forEach(obj => {
			obj.x = Math.round(obj.x * 100) / 100
		})

		const combinedData = [
			...data.map(point => ({ name: `${point.x}`, dataPoint: point.y })),
			...functionData.map(point => ({
				name: `${point.x}`,
				functionPoint: point.y,
			})),
		]

		const sortedData = combineAndSortObjects(combinedData)

		setDataGraph(sortedData)

		console.log(sortedData)
	}

	const handleFind = () => {
		try {
			const copyX = [...xValues]
			const copyY = [...yValues]

			const solution = localInterpolation(copyX, copyY, interpolationType)
			setSolution(solution)
			drawGraph(solution)
			setDecision(true)
		} catch {}
	}

	return (
		<div>
			<h1>Интерполяция: </h1>
			<p>Конструктор:</p>
			<CoordinateInput onCoordinatesChange={handleCoordinatesChange} />
			<div className={style['select-container']}>
				<p className={style['select-label']}>Выберите тип интерполяции:</p>
				<select
					value={interpolationType}
					onChange={handleInterpolationTypeChange}
					className={style['select-dropdown']}
				>
					<option value={2}>Линейный</option>
					<option value={3}>Квадратный</option>
					<option value={4}>Кубический</option>
				</select>
			</div>
			<button onClick={handleFind} className={style['solve-button']}>
				Найти
			</button>

			{decision && (
				<div>
					<h2>Результат интерполяции:</h2>

					{solution &&
						solution.map((item, index) => (
							<div key={index}>
								{`f(x) = ${item[0]}, ${item[1][0]} < x <= ${item[1][1]}`}
							</div>
						))}
				</div>
			)}

			{decision && (
				<div>
					<h2>График:</h2>
					<LineChart width={600} height={300} data={dataGraph}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='dataPoint' stroke='#8884d8' />
						<Line
							type='monotone'
							dataKey='functionPoint'
							stroke='#82ca9d'
							dot={false}
						/>
					</LineChart>
				</div>
			)}
		</div>
	)
}

export default InterpolationPage
