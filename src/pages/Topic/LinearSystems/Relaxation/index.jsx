import React, { useState } from 'react'
import MathJax from 'react-mathjax'

import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import PrecisionComponent from '../../../../components/constructors/Precision'

import TableComponent from '../../../../components/table'

import MethodRelaxation from '../../../../features/topic/LinearSystems/methodRelaxation'

import style from './Relaxation.module.scss'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RelaxationPage = () => {
	const [A, setA] = useState([])
	const [B, setB] = useState([])
	const [precision, setPrecision] = useState(0.1)

	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const updateSystem = (newA, newB) => {
		setA(newA)
		setB(newB)
		setDecision(false)
	}

	const handlePrecisionUpdate = newPrecision => {
		setPrecision(newPrecision)
		setDecision(false)
	}

	const solveSystem = () => {
		const copiedA = A.map(row => [...row])
		const copiedB = [...B]
		try {
			const solution = MethodRelaxation(copiedA, copiedB, precision)
			console.log(solution)
			setSolution(solution)
			setDecision(true)
		} catch {
			toast.error('Матрица не является доминирующей по диагонали')
		}
	}

	return (
		<div className={style['kramer-container']}>
			<h1 className={style['kramer-header']}>Метод релаксации</h1>
			<LinearSystemConstructor
				className={style['linear-system-constructor']}
				onUpdate={updateSystem}
			/>
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
						<MathJax.Node formula={`x = [${solution.x.join(', ')}]`} />
					</MathJax.Provider>
				</div>
			)}
			{decision && <TableComponent solution={solution} />}
		</div>
	)
}

export default RelaxationPage
