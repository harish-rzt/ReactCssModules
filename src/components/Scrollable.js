import React from 'react';
import { wrapper } from './ComponentGroup.css'

export default class Scrollable extends React.Component {

    render() {
        return (
        	<div className={ wrapper }>
	            { this.props.children }
	        </div>;
        )
    }

}