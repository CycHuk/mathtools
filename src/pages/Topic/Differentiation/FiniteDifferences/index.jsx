import React, { useState } from 'react'
import FunctionInput from '../../../../components/constructors/functionInput'

import MethodFiniteDifferences from '../../../../features/topic/Differentiation/FiniteDifferences'

import style from './FiniteDifferences.module.scss'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const FiniteDifferencesPage = () => {
	const [functionValue, setFunctionValue] = useState('')
	const [hValue, setHValue] = useState('0.001')
	const [xValue, setXValue] = useState('')
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

	const solveSystem = () => {
		try {
			const func = functionValue
			const x = parseFloat(xValue)
			const h = parseFloat(hValue)
			const solution = MethodFiniteDifferences(func, x, h)
			console.log(solution)
			setSolution(solution)
			setDecision(true)
		} catch {}
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
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>

			{decision && (
				<div className={style['decision']}>
					<h2>Формулы разностей:</h2>
					<table>
						<thead>
							<tr>
								<th>Тип разности</th>
								<th>Формула</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Правая разность</td>
								<td>
									<Latex>{'$$\\frac{f(x + h) - f(x)}{h}$$'}</Latex>
								</td>
							</tr>
							<tr>
								<td>Левая разность</td>
								<td>
									<Latex>{'$$\\frac{f(x) - f(x - h)}{h}$$'}</Latex>
								</td>
							</tr>
							<tr>
								<td>Центральная разность</td>
								<td>
									<Latex>{'$$\\frac{f(x + h) - f(x - h)}{2h}$$'}</Latex>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

			{decision && (
				<div className={style['results-container']}>
					<h2>Результаты:</h2>
					<table className={style['results-table']}>
						<thead>
							<tr>
								<th>Правый</th>
								<th>Левый</th>
								<th>Центральный</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{solution[0]}</td>
								<td>{solution[1]}</td>
								<td>{solution[2]}</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default FiniteDifferencesPage
