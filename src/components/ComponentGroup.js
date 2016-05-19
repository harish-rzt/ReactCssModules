import React from 'react';
import ComponentBlock from './ComponentBlock';
import styles from './ComponentBlock.css';

const ComponentTitle = ({ title }) => (
    <h2 className={ styles.title }>{ title }</h2>
);

const Scrollable = () => (
    <div className={ styles.wrapper }></div>
);

export default class ComponentBlock extends React.Component {

    render() {
        return <div className={styles.root}>
            <ComponentTitle title="ActiveMQ Cluster"></ComponentTitle>
            <Scrollable>
                <ComponentBlock></ComponentBlock>
            </Scrollable>
        </div>
    }

}
