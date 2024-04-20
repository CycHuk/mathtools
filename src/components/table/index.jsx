// TableComponent.js

import React from 'react'
import style from './Table.module.scss'

const TableComponent = ({ solution }) => {
	return (
		<div className={style['table-container']}>
			<table className={style.table}>
				<thead>
					<tr>
						{solution.header.map((item, index) => (
							<th key={index}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{solution.iterations.map((iteration, rowIndex) => (
						<tr key={rowIndex}>
							{iteration.map((value, colIndex) => (
								<td key={colIndex}>{value}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TableComponent
