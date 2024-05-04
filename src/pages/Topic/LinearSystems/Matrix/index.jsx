import React, { useState } from 'react'
import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import MethodMatrix from '../../../../features/topic/LinearSystems/methodMatrix'

import style from './Matrix.module.scss'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const MatrixPage = () => {
	const [A, setA] = useState([])
	const [B, setB] = useState([])
	const [solution, setSolution] = useState(null)
	const [decision, setDecision] = useState(false)

	const updateSystem = (newA, newB) => {
		setA(newA)
		setB(newB)
		setDecision(false)
	}

	const solveSystem = () => {
		const copiedA = A.map(row => [...row])
		const copiedB = [...B]
		try {
			const solution = MethodMatrix(copiedA, copiedB)
			setSolution(solution)
			setDecision(true)
		} catch {}
	}

	const MethodExplanation = () => (
		<div className={style['method-explanation']}>
			<h2>Как работает метод матричного решения?</h2>
			<p>
				Метод матричного решения основан на представлении системы линейных
				уравнений в виде матричного уравнения: AX = B, где A - матрица
				коэффициентов, X - вектор неизвестных, B - вектор правой части. Для
				решения системы мы используем метод обратной матрицы: X = A<sup>-1</sup>{' '}
				* B, где A<sup>-1</sup> - обратная матрица к матрице A.
			</p>
		</div>
	)

	return (
		<div className={style['kramer-container']}>
			<h1 className={style['kramer-header']}>Метод Матричный</h1>
			<LinearSystemConstructor
				className={style['linear-system-constructor']}
				onUpdate={updateSystem}
			/>
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>

			{decision && (
				<div className={style['solution-container']}>
					<h3>Ответ:</h3>
					<Latex>{`$$x = [${solution.join(', ')}]$$`}</Latex>
				</div>
			)}

			<MethodExplanation />
		</div>
	)
}

export default MatrixPage
