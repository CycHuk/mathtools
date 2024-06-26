import React, { useState } from 'react'

import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import PrecisionComponent from '../../../../components/constructors/Precision'

import TableComponent from '../../../../components/table'

import MethodYakobi from '../../../../features/topic/LinearSystems/methodYakobi'

import style from './Yakobi.module.scss'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const YakobiPage = () => {
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
		// const copiedA = [
		// 	[-4, 2, 1],
		// 	[4, -5, 0],
		// 	[-1, 0, 4],
		// ]

		// const copiedB = [1, 7, 45]
		const copiedA = A.map(row => [...row])
		const copiedB = [...B]
		try {
			const solution = MethodYakobi(copiedA, copiedB, precision)
			setSolution(solution)
			setDecision(true)
		} catch {
			toast.error('Матрица не является доминирующей по диагонали')
		}
	}

	return (
		<div className={style['kramer-container']}>
			<h1 className={style['kramer-header']}>Метод Якоби</h1>
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
					<h3>Ответ:</h3>
					<Latex>{`$$x = [${solution.x.join(', ')}]$$`}</Latex>
				</div>
			)}
			{decision && <TableComponent solution={solution} />}
		</div>
	)
}

export default YakobiPage
