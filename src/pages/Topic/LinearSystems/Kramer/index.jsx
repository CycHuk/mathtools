import React, { useState } from 'react'
import MathJax from 'react-mathjax'
import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import MethodKramer from '../../../../features/topic/LinearSystems/methodKramer'

import style from './Kramer.module.scss'

const formatMatrix = matrix => {
	return `\\begin{vmatrix}
        ${matrix.map(row => row.map(num => num).join(' & ')).join(' \\\\ ')}
        \\end{vmatrix}`
}

const KramerPage = () => {
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
		const solution = MethodKramer(copiedA, copiedB)
		setSolution(solution)

		setDecision(true)
	}

	return (
		<div className={style['kramer-container']}>
			<h1 className={style['kramer-header']}>Метод Крамера</h1>
			<LinearSystemConstructor
				className={style['linear-system-constructor']}
				onUpdate={updateSystem}
			/>
			<button className={style['solve-button']} onClick={solveSystem}>
				Решить
			</button>
			{decision && (
				<div className={style['solution-container']}>
					<h2>Решение:</h2>
					<MathJax.Provider>
						<div>
							<MathJax.Node
								formula={
									`A = ` +
									formatMatrix(solution.mainDeterminant.matrix) +
									' = ' +
									solution.mainDeterminant.determinant
								}
							/>
							<ul>
								{solution.replacedMatrices.map((item, index) => (
									<li key={index}>
										<MathJax.Node
											formula={
												`A${index} = ` +
												formatMatrix(item.matrix) +
												' = ' +
												item.determinant
											}
										/>
										<MathJax.Node
											formula={`x${index} = \\frac{A${index}}{A} = \\frac{${item.determinant}}{${solution.mainDeterminant.determinant}} = ${solution.x[index]}`}
										/>
									</li>
								))}
							</ul>

							<h3>Ответ:</h3>
							<MathJax.Node formula={`x = [${solution.x.join(', ')}]`} />
						</div>
					</MathJax.Provider>
				</div>
			)}
		</div>
	)
}

export default KramerPage
