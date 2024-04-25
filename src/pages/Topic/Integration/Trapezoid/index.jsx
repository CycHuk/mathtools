import React, { useState } from 'react'
import IntegralInput from '../../../../components/constructors/IntegralInput'
import style from './Trapezoid.module.scss'

import Method from '../../../../features/topic/Integration/Trapezoid'

import { evaluateFunction } from '../../../../features/topic/NonlinearEquations/functions'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

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

const TrapezoidPage = () => {
	const [integralData, setIntegralData] = useState(null)
	const [stepSize, setStepSize] = useState(0.1)

	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)
	const [dataGraph, setDataGraph] = useState([])

	const handleIntegralUpdate = data => {
		setIntegralData(data)
		setDecision(false)
	}

	const handleStepSizeChange = event => {
		setStepSize(parseFloat(event.target.value))
		setDecision(false)
	}

	const drawGraph = (solution, integral) => {
		let data = solution.values

		let functionData = []

		for (
			let x = parseFloat(integral.lowerBound);
			x <= parseFloat(integral.upperBound);
			x += 0.01
		) {
			functionData.push({
				x: x,
				y: evaluateFunction(integral.expression, x),
			})
		}
		console.log(functionData)

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

		setDataGraph(combineAndSortObjects(combinedData))
	}

	const solveIntegral = () => {
		const solution = Method(
			integralData.expression,
			integralData.lowerBound,
			integralData.upperBound,
			stepSize
		)
		console.log(solution)
		setSolution(solution)
		drawGraph(solution, integralData)
		setDecision(true)
	}

	return (
		<div className={style.rectanglePage}>
			<h1>Метод трапеции</h1>
			<p>Конструктор:</p>
			<IntegralInput onUpdate={handleIntegralUpdate} />
			<div className={style.inputContainer}>
				<label htmlFor='stepSize'>
					Шаг (h):
					<input
						type='number'
						id='stepSize'
						value={stepSize}
						onChange={handleStepSizeChange}
						className={style.stepInput}
					/>
				</label>
			</div>
			<button className={style.solveButton} onClick={solveIntegral}>
				Решить
			</button>

			{decision && (
				<div className={style['results-container']}>
					<h2>Результат: {solution.integral}</h2>
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
						<Line
							type='monotone'
							dataKey='dataPoint'
							stroke='#8884d8'
							dot={false}
						/>
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

export default TrapezoidPage
