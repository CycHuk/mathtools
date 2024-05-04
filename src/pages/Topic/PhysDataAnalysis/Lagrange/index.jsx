import React, { useState } from 'react'

import CoordinateInput from '../../../../components/constructors/CoordinateInput'
import ChartComponent from '../../../../components/ChartComponent'
import LagrangeInterpolation from '../../../../features/topic/PhysDataAnalysis/Lagrange'

import style from './Lagrange.module.scss'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const LagrangePage = () => {
	const [yValues, setYValues] = useState([])
	const [xValues, setXValues] = useState([])

	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const handleCoordinatesChange = (newYValues, newXValues) => {
		setYValues(newYValues)
		setXValues(newXValues)
		setDecision(false)
	}

	const handleFind = () => {
		try {
			const copyX = [...xValues]
			const copyY = [...yValues]

			const solution = LagrangeInterpolation(copyX, copyY)

			setSolution(solution)
			setDecision(true)
			console.log(solution)
		} catch {}
	}

	return (
		<div>
			<h1>Полином Лагранжа </h1>
			<p>Конструктор:</p>
			<CoordinateInput onCoordinatesChange={handleCoordinatesChange} />
			<button onClick={handleFind} className={style['solve-button']}>
				Найти
			</button>
			{decision && (
				<div className={style['solution-container']}>
					<h3>Формула:</h3>
					<Latex>{`$$f(x) = ${solution}$$`}</Latex>
					<h3>График:</h3>
					<ChartComponent
						xValues={xValues}
						yValues={yValues}
						functionString={solution}
					/>
				</div>
			)}
		</div>
	)
}

export default LagrangePage
