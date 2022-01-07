import React, { memo, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function ChartTest() {
	const refArea = useRef();
	const refXAxis = useRef();

	// cx - moves the circle along the axis X
	// cy - moves the circle along the axis Y
	// r - radius
	useEffect(() => {
		const svgElement = d3.select(refArea.current);
		svgElement.append('g').call(xAxisGenerator);
	}, []);

	const width = 500;
	const height = 300;

	const minData = 0;
	const maxData = 10000;
	const xScale = d3.scaleLinear().domain([minData, maxData]).range([0, width]);

	const xAxisGenerator = d3.axisBottom(xScale);

	return (
		<svg
			ref={refArea}
			width={width}
			height={height}
			style={{
				border: '1px solid pink',
			}}
		/>
	);
}
export default memo(ChartTest);
