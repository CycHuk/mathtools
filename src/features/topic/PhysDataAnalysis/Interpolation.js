import lagrangeInterpolation from './Lagrange'

function localInterpolation(xValues, yValues, splineType) {
	let sortedData = []
	for (let i = 0; i < xValues.length; i++) {
		sortedData.push({ x: xValues[i], y: yValues[i] })
	}
	sortedData.sort((a, b) => a.x - b.x)

	let xIntervals = []
	let yIntervals = []
	for (let i = 1; i < sortedData.length; i += splineType - 1) {
		let xInterval = []
		let yInterval = []
		for (
			let j = i - 1;
			j < Math.min(i + splineType - 1, sortedData.length);
			j++
		) {
			xInterval.push(sortedData[j].x)
			yInterval.push(sortedData[j].y)
		}
		xIntervals.push(xInterval)
		yIntervals.push(yInterval)
	}

	let spline = []

	for (let i = 0; i < xIntervals.length; i++) {
		let xInterval = xIntervals[i]
		let yInterval = yIntervals[i]
		let minX = xInterval[0]
		let maxX = xInterval[xInterval.length - 1]
		spline.push([
			lagrangeInterpolation(xInterval, yInterval, (minX + maxX) / 2),
			[minX, maxX],
		])
	}

	return spline
}

export default localInterpolation
