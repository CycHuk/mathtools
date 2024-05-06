import React, { useState } from 'react'

import { eulerNeYavnii } from '../../../../features/topic/DY/first/eulerNeYavnii.js'
import { eulerYavniy } from '../../../../features/topic/DY/first/eulerYavniy'
import { eulerSPerechetom } from '../../../../features/topic/DY/first/eulerSPerechetom'
import { predictorKorector } from '../../../../features/topic/DY/first/predictorKorector'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

import RangeInput from '../../../../components/constructors/rangeInput'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from './FirstOrder.module.scss'

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

const FirstOrderPage = () => {
	const [functionValue, setFunctionValue] = useState('10*y + x**2')
	const [start, setStart] = useState()
	const [end, setEnd] = useState()
	const [step, setStep] = useState(0.1)
	const [initialY, setInitialY] = useState(0)
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)
	const [values, setValues] = useState([])
	const [selectedMethod, setSelectedMethod] = useState('eulerYavniy')

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
				case 'eulerYavniy':
					solution = eulerYavniy(func, x, y, h, n)
					break
				case 'eulerNeYavnii':
					solution = eulerNeYavnii(func, x, y, h, n)
					break
				case 'eulerSPerechetom':
					solution = eulerSPerechetom(func, x, y, h, n)
					break
				case 'predictorKorector':
					solution = predictorKorector(func, x, y, h, n)
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

			console.log(values)

			solution = transformObject(solution)

			setSolution(solution)
			setDecision(true)
		} catch (error) {
			console.log(error)
			toast.error('Ошибка')
		}
	}

	const handleMethodChange = e => {
		setSelectedMethod(e.target.value)
	}

	return (
		<div className={style['container']}>
			<h1 className={style['header']}>Решение ОДУ первого порядка</h1>
			<div className={style['inputContainer']}>
				<h1 className={style['inputLabel']}>Введите функцию: y' =</h1>
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
					<option value='eulerYavniy'>Явный метод Эйлера</option>
					<option value='eulerNeYavnii'>Неявный метод Эйлера</option>
					<option value='eulerSPerechetom'>Метод Эйлера с пересчетом</option>
					<option value='predictorKorector'>Метод предиктор-корректор</option>
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

export default FirstOrderPage
