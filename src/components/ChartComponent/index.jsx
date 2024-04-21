import React from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Scatter,
} from 'recharts'

import {
	evaluateFunction,
	restorePowerOperator,
} from '../../features/topic/NonlinearEquations/functions'

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

const ChartComponent = ({ xValues, yValues, functionString }) => {
	const funStr = restorePowerOperator(functionString)

	let data = xValues.map((x, index) => ({ x: x.toFixed(1), y: yValues[index] }))

	const functionData = []
	for (
		let x = Math.min(...xValues) - 1;
		x <= Math.max(...xValues) + 1;
		x += 0.1
	) {
		const y = evaluateFunction(funStr, x).toFixed(1)
		functionData.push({ x: x.toFixed(1), y })
	}

	const combinedData = [
		...data.map(point => ({ name: `${point.x}`, dataPoint: point.y })),
		...functionData.map(point => ({
			name: `${point.x}`,
			functionPoint: point.y,
		})),
	]

	const sortedData = combineAndSortObjects(combinedData)
	console.log(sortedData)

	return (
		<LineChart width={600} height={300} data={sortedData}>
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
	)
}

export default ChartComponent
