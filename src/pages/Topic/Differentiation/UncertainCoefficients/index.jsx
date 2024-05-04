import React, { useState } from 'react'
import FunctionInput from '../../../../components/constructors/functionInput'
import Method from '../../../../features/topic/Differentiation/UncertainCoefficients'
import style from './UncertainCoefficients.module.scss'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const UncertainCoefficientsPage = () => {
	const [functionValue, setFunctionValue] = useState('')
	const [hValue, setHValue] = useState('0.001')
	const [xValue, setXValue] = useState('')
	const [derivativeOrder, setDerivativeOrder] = useState(1)
	const [errorOrder, setErrorOrder] = useState(2)
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const handleFunctionChange = value => {
		setFunctionValue(value)
		setDecision(false)
	}

	const handleHChange = value => {
		setHValue(parseFloat(value))
		setDecision(false)
	}

	const handleXChange = value => {
		setXValue(parseFloat(value))
		setDecision(false)
	}

	const handleDerivativeOrderChange = value => {
		setDerivativeOrder(parseInt(value))
		setDecision(false)
	}

	const handleErrorOrderChange = value => {
		setErrorOrder(parseInt(value))
		setDecision(false)
	}

	const solveSystem = () => {
		try {
			const func = functionValue
			const x = parseFloat(xValue)
			const h = parseFloat(hValue)
			const derivative = derivativeOrder
			const error = errorOrder

			const solution = Method(func, x, h, derivative, error)
			setSolution(solution)
			setDecision(true)
		} catch {}
	}

	let formula = null
	if (decision) {
		if (derivativeOrder === 1) {
			if (errorOrder === 2) {
				formula = (
					<Latex>
						{'$$-\\frac{1}{2} \\cdot \\frac{f(x - h) - f(x + h)}{h}$$'}
					</Latex>
				)
			} else if (errorOrder === 4) {
				formula = (
					<Latex>
						{
							'$$\\frac{1}{12} \\cdot \\frac{f(x - 2h) - 2f(x - h) + 2f(x + h) - f(x + 2h)}{h}$$'
						}
					</Latex>
				)
			} else if (errorOrder === 6) {
				formula = (
					<Latex>
						{
							'$$-\\frac{1}{60} \\cdot \\frac{f(x - 3h) - 3f(x - 2h) + 3f(x - h) - 3f(x + h) + 3f(x + 2h) - f(x + 3h)}{h}$$'
						}
					</Latex>
				)
			}
		} else if (derivativeOrder === 2) {
			if (errorOrder === 2) {
				formula = (
					<Latex>{'$$\\frac{f(x - h) - 2f(x) + f(x + h)}{h^2}$$'}</Latex>
				)
			} else if (errorOrder === 4) {
				formula = (
					<Latex>
						{
							'$$-\\frac{1}{12} \\cdot \\frac{f(x - 2h) - 4f(x - h) + 5f(x) - 4f(x + h) + f(x + 2h)}{h^2}$$'
						}
					</Latex>
				)
			} else if (errorOrder === 6) {
				formula = (
					<Latex>
						{
							'$$\\frac{1}{90} \\cdot \\frac{f(x - 3h) - 3f(x - 2h) + 3f(x - h) - 49f(x) + 3f(x + h) - 3f(x + 2h) + f(x + 3h)}{h^2}$$'
						}
					</Latex>
				)
			}
		}
	}

	return (
		<div className={style['container']}>
			<h1 className={style['header']}>Конечно-разностная аппроксимация</h1>
			<FunctionInput onInputChange={handleFunctionChange} />
			<div className={style['input-container']}>
				<p>h:</p>
				<input
					type='number'
					className={style['input']}
					placeholder='Введите h'
					value={hValue}
					onChange={e => handleHChange(e.target.value)}
				/>
			</div>
			<div className={style['input-container']}>
				<p>x:</p>
				<input
					type='number'
					className={style['input']}
					placeholder='Введите x'
					value={xValue}
					onChange={e => handleXChange(e.target.value)}
				/>
			</div>
			<div className={style['radio-container']}>
				<p>Порядок производной:</p>
				<div>
					<label>
						<input
							type='radio'
							value='1'
							checked={derivativeOrder === 1}
							onChange={() => handleDerivativeOrderChange(1)}
						/>
						Первый порядок
					</label>
					<label>
						<input
							type='radio'
							value='2'
							checked={derivativeOrder === 2}
							onChange={() => handleDerivativeOrderChange(2)}
						/>
						Второй порядок
					</label>
				</div>
			</div>
			<div className={style['radio-container']}>
				<p>Порядок погрешности:</p>
				<div>
					<label>
						<input
							type='radio'
							value='2'
							checked={errorOrder === 2}
							onChange={() => handleErrorOrderChange(2)}
						/>
						2
					</label>
					<label>
						<input
							type='radio'
							value='4'
							checked={errorOrder === 4}
							onChange={() => handleErrorOrderChange(4)}
						/>
						4
					</label>
					<label>
						<input
							type='radio'
							value='6'
							checked={errorOrder === 6}
							onChange={() => handleErrorOrderChange(6)}
						/>
						6
					</label>
				</div>
			</div>
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>
			{formula && (
				<div>
					<h2>Формула метода наименьших квадратов:</h2>
					{formula}
				</div>
			)}
			{decision && (
				<div className={style['results-container']}>
					<h2>Результат: {solution}</h2>
				</div>
			)}
		</div>
	)
}

export default UncertainCoefficientsPage
