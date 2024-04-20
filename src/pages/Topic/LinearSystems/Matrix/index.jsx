import React, { useState } from 'react'
import MathJax from 'react-mathjax'
import LinearSystemConstructor from '../../../../components/constructors/LinearSystems'
import MethodMatrix from '../../../../features/topic/LinearSystems/methodMatrix'

import style from './Matrix.module.scss'

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
					<MathJax.Provider>
						<h3>Ответ:</h3>
						<MathJax.Node formula={`x = [${solution.join(', ')}]`} />
					</MathJax.Provider>
				</div>
			)}
			<div className={style['explanation-container']}>
				<h2>Как работает матричный метод?</h2>
				<MathJax.Provider>
					<div>
						<h2>Матричный метод</h2>
						<p>
							Матричный метод - это метод решения систем линейных уравнений с
							использованием матриц и векторов. Он широко применяется в
							различных областях, включая линейную алгебру, численные методы,
							физику, экономику и многие другие.
						</p>
						<p>Предположим, у нас есть система линейных уравнений вида:</p>
						<MathJax.Node
							formula={`\\begin{align*} a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n &= b_1 \\\\ a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n &= b_2 \\\\ \\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n &= b_m \\end{align*}`}
						/>
						<p>Мы можем записать эту систему в матричной форме:</p>
						<MathJax.Node formula={`A \\mathbf{x} = \\mathbf{b}`} />
						<p>Где:</p>
						<ul>
							<li>
								<MathJax.Node inline formula={`A`} /> - матрица коэффициентов
								размера <MathJax.Node inline formula={`m \\times n`} />;
							</li>
							<li>
								<MathJax.Node inline formula={`\\mathbf{x}`} /> - вектор
								неизвестных размера{' '}
								<MathJax.Node inline formula={`n \\times 1`} />;
							</li>
							<li>
								<MathJax.Node inline formula={`\\mathbf{b}`} /> - вектор правой
								части размера <MathJax.Node inline formula={`m \\times 1`} />.
							</li>
						</ul>
						<p>
							Решение этой системы может быть найдено путем умножения обеих
							сторон уравнения на обратную матрицу{' '}
							<MathJax.Node inline formula={`A`} />:
						</p>
						<MathJax.Node formula={`\\mathbf{x} = A^{-1} \\mathbf{b}`} />
						<p>
							Где <MathJax.Node inline formula={`A^{-1}`} /> - обратная матрица{' '}
							<MathJax.Node inline formula={`A`} />, определяемая как:
						</p>
						<MathJax.Node formula={`A^{-1} = \\frac{1}{|A|} \\cdot A^{*}`} />
						<p>
							Где <MathJax.Node inline formula={`|A|`} /> - определитель матрицы{' '}
							<MathJax.Node inline formula={`A`} />, а{' '}
							<MathJax.Node inline formula={`A^{*}`} /> - транспонированная
							матрица алгебраических дополнений.
						</p>

						<h3>Нахождение матрицы алгебраических дополнений</h3>
						<p>
							Для нахождения каждого элемента{' '}
							<MathJax.Node inline formula={`C_{ij}`} /> матрицы алгебраических
							дополнений <MathJax.Node inline formula={`A^{*}`} />, мы можем
							использовать следующее выражение:
						</p>
						<MathJax.Node formula={`C_{ij} = (-1)^{i+j} \\cdot M_{ij}`} />
						<p>
							Где <MathJax.Node inline formula={`M_{ij}`} /> - минор элемента{' '}
							<MathJax.Node inline formula={`a_{ij}`} />, то есть определитель
							матрицы, полученной из <MathJax.Node inline formula={`A`} /> путем
							удаления <MathJax.Node inline formula={`i`} />
							-й строки и <MathJax.Node inline formula={`j`} />
							-го столбца.
						</p>
					</div>
				</MathJax.Provider>
			</div>
		</div>
	)
}

export default MatrixPage
