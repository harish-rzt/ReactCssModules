import React from 'react';
import ComponentGroup from './ComponentGroup';
import styles from './SoftwareComponents.css';

export default class SoftwareComponents extends React.Component {
    render() {
        return <div className={ styles.root }>
            <ComponentGroup />
        </div>
    }
}