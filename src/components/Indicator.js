import React from 'react';
import { basic } from './Indicator.css';

const Indicator = ({ color, radius, style, className }) => {
	return <span
		className={basic + " " + className}
		style={{
			...style, 
			backgroundColor: color, 
			width: `${radius}px`, 
			height: `${radius}px`
		}}>
	</span>
};

export default Indicator;