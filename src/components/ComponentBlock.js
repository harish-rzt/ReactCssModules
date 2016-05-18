import React from 'react';
import Indicator from './Indicator';
import styles from './ComponentBlock.css';
import { fLeft, fRight } from './global.css'

const ComponentHeader = ({ title, statusColor }) => (
    <div className={ styles.header}>
        <h2 className={fLeft + " " + styles.title}>{ title }</h2>
        <Indicator
            className={fRight}
            color="red"
            radius="20"
        />
    </div>
);

const ComponentProperty = ({ name, value }) => (
    <li className={ styles.propListItem }>
        <span className={ styles.propName }>{ name }</span>
        <span className={ styles.propValue }>{ value }</span>
    </li>
);

const ComponentBody = ({ properties }) => (
    <ul>
        { properties.map( ComponentProperty ) }
    </ul>
);

// const HR = ({size}) => (<hr className={ComponentHeader} />);

export default class ComponentBlock extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={styles.root}>
            <ComponentHeader title="ActiveMQ-prod"  statusColor="green"/>
            {/*<HR size="80"/>*/}
            <ComponentBody properties={ [] }/>
        </div>;
    }

}

