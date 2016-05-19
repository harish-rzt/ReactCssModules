import React, { Component } from 'react';
import Indicator from './Indicator';
import styles from './ComponentBlock.css';
import { fLeft, fRight } from '../global.css';

const ComponentHeader = ({title, statusColor}) => (
    <div className={ styles.header}>
        <h2 className={fLeft + " " + styles.title}>{ title }</h2>
        <Indicator
            className={fRight + " " + styles.indicator}
            color="green"
            radius="15"
        />
    </div>
);

const ComponentProperty = ({name, value}) => (
    <li className={ styles.item } key={name}>
        <span className={fLeft + " " + styles.propName }>{ name }</span>
        <span className={fRight + " " + styles.propValue }>{ value }</span>
    </li>
);

const ComponentBody = ({properties}) => (
    <ul className={ styles.list }>
        { properties.map(ComponentProperty) }
    </ul>
);

const HR = ({size}) => (<hr className={styles.line}/>);

export default class ComponentBlock extends Component {

    render() {
        let data = this.props.data;
        return <div className={fLeft + " " + styles.root}>
            <ComponentHeader title={data.name} statusColor="green"/>
            <HR size="80"/>
            <ComponentBody properties={data.properties }/>
        </div>;
    }

}

