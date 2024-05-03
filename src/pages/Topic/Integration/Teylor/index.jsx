import React, { useState } from 'react'
import IntegralInput from '../../../../components/constructors/IntegralInput'
import style from './Teylor.module.scss'

import Method from '../../../../features/topic/Integration/Teylor'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TeylorPage = () => {
	const [integralData, setIntegralData] = useState(null)
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)
	const [stepSize, setStepSize] = useState(10)

	const handleIntegralUpdate = data => {
		setIntegralData(data)
		setDecision(false)
	}

	const handleStepSizeChange = event => {
		setStepSize(parseFloat(event.target.value))
		setDecision(false)
	}

	const solveIntegral = () => {
		try {
			const result = Method(
				integralData.expression,
				parseFloat(integralData.lowerBound),
				parseFloat(integralData.upperBound),
				stepSize
			)
			setSolution(result)
			setDecision(true)
		} catch {
			toast.error('Ошибка')
		}
	}

	return (
		<div className={style.rectanglePage}>
			<h1>Разложение в ряд Тейлора</h1>
			<p>Конструктор:</p>
			<IntegralInput onUpdate={handleIntegralUpdate} />
			<div className={style.inputContainer}>
				<label htmlFor='stepSize'>
					Число делений (n):
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
				<div className={style.resultContainer}>
					<p>Результат:</p>
					<p>{solution}</p>
				</div>
			)}
		</div>
	)
}

export default TeylorPage
