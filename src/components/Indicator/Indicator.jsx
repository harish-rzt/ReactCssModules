import { basic } from 'Indicator.css';

const Indicator = ({ color, radius, style }) => {
	<span 
		className={basic}
		style={{
			...style, 
			backgroundColor: color, 
			width: `${radius}px`, 
			height: `${radius}px`,
		}}
	>
	</span>
}