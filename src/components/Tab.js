import React from 'react';
import styles from './tab.css';

export default class Tab extends React.Component {
    render() {
        return <button className={ styles.tabButton }
                       style={{
                            borderBottomColor: this.props.borderColor
                        }}>
            <span className={ styles.title }
                  style={{
                            color: this.props.textColor
                        }}>
                { this.props.title }
            </span>
        </button>
    }
};