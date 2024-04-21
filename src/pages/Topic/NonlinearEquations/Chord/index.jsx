import React, { useState } from 'react'
import MathJax from 'react-mathjax'

import FunctionInput from '../../../../components/constructors/functionInput'
import RangeInput from '../../../../components/constructors/rangeInput'
import PrecisionComponent from '../../../../components/constructors/Precision'

import TableComponent from '../../../../components/table'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import MethodChord from '../../../../features/topic/NonlinearEquations/methodChord'

import style from './Chord.module.scss'

const ChordPage = () => {
	const [functionValue, setFunctionValue] = useState('')
	const [start, setStart] = useState('')
	const [end, setEnd] = useState('')
	const [precision, setPrecision] = useState(0.1)

	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const handleFunctionChange = value => {
		setFunctionValue(value)
		setDecision(false)
	}

	const handleRangeChange = (startValue, endValue) => {
		setStart(startValue)
		setEnd(endValue)
		setDecision(false)
	}

	const handlePrecisionUpdate = newPrecision => {
		setPrecision(newPrecision)
		setDecision(false)
	}

	const solveSystem = () => {
		try {
			const func = functionValue
			const a = parseFloat(start)
			const b = parseFloat(end)

			const solution = MethodChord(func, a, b, precision)
			setSolution(solution)
			setDecision(true)
		} catch {
			toast.error('Функция должна иметь разные знаки на концах интервала')
		}
	}
	return (
		<div className={style['container']}>
			<h1 className={style['header']}>Метод Хорд</h1>
			<FunctionInput onInputChange={handleFunctionChange} />
			<h1>Ввод диапазона</h1>
			<RangeInput onRangeChange={handleRangeChange} />
			<PrecisionComponent
				onUpdate={handlePrecisionUpdate}
				precision={precision}
			/>
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>
			{decision && (
				<div className={style['solution-container']}>
					<MathJax.Provider>
						<h3>Ответ:</h3>
						<MathJax.Node formula={`x = ${solution.x} `} />
					</MathJax.Provider>
				</div>
			)}
			{decision && <TableComponent solution={solution} />}
		</div>
	)
}

export default ChordPage
