import React from 'react';
import styles from './ButtonGroup.css';

const Button = ({ name }) => <button className={ styles.button }>{ name }</button>;

export default class ButtonGroup extends React.Component {
    render() {
        return <div className={ styles.root }>
            <Button name="Settings"/>
            <Button name="Logout"/>
        </div>
    }
}