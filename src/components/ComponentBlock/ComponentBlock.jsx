import Colors from 'Constants.ts';
import Indicator from 'Indicator.jsx';
import { floatRight } from 'Common.css';
import styles from 'ComponentBlock.css';

const colorMap = ( key ) {
	const StatusColors = {
		"active": colors.green,
		"paused": colors.amber
	};
	return StatusColors[ key ];
}

const Title = text => <H2>{ title }</h2>;

const ComponentHeader = ({ title, statusColor }) => (
	<div>
		<H2>{ title }</h2>
		<Indicator 
			color={ statusColor } 
			radius="20" 
			className={ floatRight }
		/>
	</div>
)

const ComponentProperty = ({ name, value }) => (
	<li className={ styles.propListItem }>
		<span className={ styles.propName }>{ name }</span>
		<span className={ styles.propValue }>{ value }</span>
	</li>
)

const ComponentBody = ({ properties }) => (
	<ul>
		{ properties.map( ComponentProperty ) }
	</ul>
)

class ComponentBlock extends Component {

	static propTypes = {
	    title: React.PropTypes.string,
	    properties: React.PropTypes.arrayOf(React.PropTypes.object),
	    status: React.PropTypes.string
	};

	render () {
		const {
			title,
			properties,
			status
		} = this.props;

		return (
			<div>
				<ComponentHeader title={ title } statusColor={ colorMap(status) }>
				<HR size="80">
				<ComponentBody properties={ properties }>
			</div>
		)
	}
}
