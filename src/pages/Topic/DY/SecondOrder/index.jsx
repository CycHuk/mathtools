import React, { useState } from 'react'

import { ryngeKytta2poryadok } from '../../../../features/topic/DY/second/ryngeKytta2poryadok'
import { ryngeKytta3poryadok } from '../../../../features/topic/DY/second/ryngeKytta3poryadok'
import { ryngeKytta4poryadok } from '../../../../features/topic/DY/second/ryngeKytta4poryadok'

import RangeInput from '../../../../components/constructors/rangeInput'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from './FirstOrder.module.scss'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

import TableComponent from '../../../../components/table'

function transformObject(inputObject) {
	let header = []
	const iterations = []

	for (const key in inputObject[0]) {
		if (Object.hasOwnProperty.call(inputObject[0], key)) {
			header.push(key)
		}
	}

	header.unshift('k')

	let k = 0
	for (const key in inputObject) {
		if (Object.hasOwnProperty.call(inputObject, key)) {
			const obj = inputObject[key]
			const iteration = [
				k++,
				...header.slice(1).map(headerItem => {
					const value = obj[headerItem]
					return typeof value === 'number' ? Number(value.toFixed(3)) : value
				}),
			]
			iterations.push(iteration)
		}
	}

	return { header, iterations }
}

const SecondOrderPage = () => {
	const [functionValue, setFunctionValue] = useState('10*y + x**2')
	const [start, setStart] = useState()
	const [end, setEnd] = useState()
	const [step, setStep] = useState(0.1)
	const [initialY, setInitialY] = useState(0)
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)
	const [values, setValues] = useState([])
	const [selectedMethod, setSelectedMethod] = useState('ryngeKytta2poryadok')

	const handleFunctionChange = e => {
		setFunctionValue(e.target.value)
		setDecision(false)
	}

	const handleRangeChange = (startValue, endValue) => {
		setStart(startValue)
		setEnd(endValue)
		setDecision(false)
	}

	const solveSystem = () => {
		try {
			const func = functionValue
			const x = parseFloat(start)
			const y = initialY
			const h = step
			const n = (end - start) / h

			let solution = null

			switch (selectedMethod) {
				case 'ryngeKytta2poryadok':
					solution = ryngeKytta2poryadok(func, x, y, h, n)
					break
				case 'ryngeKytta3poryadok':
					solution = ryngeKytta3poryadok(func, x, y, h, n)
					break
				case 'ryngeKytta4poryadok':
					solution = ryngeKytta4poryadok(func, x, y, h, n)
					break
				default:
					toast.error('Выбран неверный метод')
					break
			}

			setValues(
				Object.getOwnPropertyNames(solution).map(i => {
					return {
						x: String(Math.round(solution[i].xi * 100) / 100),
						y: solution[i].yi,
					}
				})
			)

			solution = transformObject(solution)

			setSolution(solution)
			setDecision(true)
		} catch (error) {
			toast.error('Ошибка')
		}
	}

	const handleMethodChange = e => {
		setSelectedMethod(e.target.value)
	}

	return (
		<div className={style['container']}>
			<h1 className={style['header']}>Решение ОДУ второго порядка</h1>
			<div className={style['inputContainer']}>
				<h1 className={style['inputLabel']}>Введите функцию: y'' =</h1>
				<input
					className={style['inputField']}
					type='text'
					value={functionValue}
					onChange={handleFunctionChange}
				/>
			</div>
			<h1>Ввод диапазона X:</h1>
			<RangeInput onRangeChange={handleRangeChange} />
			<div className={style['inputContainer']}>
				<h1 className={style['inputLabel']}>Шаг h:</h1>
				<input
					className={style['inputField']}
					type='number'
					value={step}
					onChange={e => setStep(parseFloat(e.target.value))}
				/>
			</div>
			<div className={style['inputContainer']}>
				<h1 className={style['inputLabel']}>Начальное значение y({start}):</h1>
				<input
					className={style['inputField']}
					type='number'
					value={initialY}
					onChange={e => setInitialY(parseFloat(e.target.value))}
				/>
			</div>
			<div className={style['inputContainer']}>
				<h1 className={style['inputLabel']}>Выберите метод:</h1>
				<select
					className={style['selectField']}
					value={selectedMethod}
					onChange={handleMethodChange}
				>
					<option value='ryngeKytta2poryadok'>
						Метод Рунге-Кутты второго порядка
					</option>
					<option value='ryngeKytta3poryadok'>
						Метод Рунге-Кутты третьего порядка
					</option>
					<option value='ryngeKytta4poryadok'>
						Метод Рунге-Кутты четвертого порядка
					</option>
				</select>
			</div>
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>

			{decision && (
				<div className={style['solution-container']}>
					<h3>График:</h3>
					<LineChart width={600} height={300} data={values}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='x' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='y' stroke='#8884d8' dot={false} />
					</LineChart>
				</div>
			)}

			{decision && (
				<div className={style['solution-container']}>
					<h3>Таблица:</h3>
					<TableComponent solution={solution} />
				</div>
			)}
		</div>
	)
}

export default SecondOrderPage
