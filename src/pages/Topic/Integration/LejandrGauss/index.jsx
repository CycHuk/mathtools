import React, { useState } from 'react'
import IntegralInput from '../../../../components/constructors/IntegralInput'
import style from './LejandrGauss.module.scss'

import Method from '../../../../features/topic/Integration/LejandrGauss'

const LejandrGaussPage = () => {
	const [integralData, setIntegralData] = useState(null)
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)
	const [stepSize, setStepSize] = useState(5)
	const [m, setM] = useState(2)

	const handleIntegralUpdate = data => {
		setIntegralData(data)
		setDecision(false)
	}

	const handleStepSizeChange = event => {
		setStepSize(parseFloat(event.target.value))
		setDecision(false)
	}

	const handleMChange = event => {
		const newValue = parseInt(event.target.value)
		if (!isNaN(newValue) && newValue >= 2 && newValue <= 3) {
			setM(newValue)
		}
	}

	const solveIntegral = () => {
		const result = Method(
			integralData.expression,
			parseFloat(integralData.lowerBound),
			parseFloat(integralData.upperBound),
			m,
			stepSize
		)
		setSolution(result)
		setDecision(true)
	}

	return (
		<div className={style.rectanglePage}>
			<h1>Метод Лежандра-Гаусса</h1>
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
			<p>
				Выберите значение m (от 2 до 3):
				<input
					type='number'
					value={m}
					onChange={handleMChange}
					min='2'
					max='3'
					className={style.mInput}
				/>
			</p>
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

export default LejandrGaussPage
