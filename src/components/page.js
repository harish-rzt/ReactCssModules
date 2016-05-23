import React from 'react';
import styles from './Page.css';
import InfrastructurePage from './InfrastructurePage';
import { fLeft } from '../global.css';

export default class Page extends React.Component {
    render() {
        return (
        	<div className={ styles.root + ' ' + fLeft }>
	            <InfrastructurePage />
	        </div>
        )
    }
};