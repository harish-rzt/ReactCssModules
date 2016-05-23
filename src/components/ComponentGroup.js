import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentBlock from './ComponentBlock';
import { getComponents } from '../actions';
import styles from './ComponentGroup.css';
import Scrollable from './Scrollable';
import { clearfix } from '../global.css';

const ComponentTitle = ({ title }) => (
    <h2 className={ styles.title }>{ title }</h2>
);

class ComponentGroup extends Component {

    componentDidMount() {
        console.log("props", this.props)
        this.props.dispatch(getComponents());
    }

    render() {
        const state = this.props.state;
        return <div className={ clearfix + " " + styles.root }>
            <ComponentTitle title="ActiveMQ Cluster"/>
            <Scrollable>
                { 
                    state.map( component => <ComponentBlock data={ component } key={ component.name }/> ) 
                }
            </Scrollable>
        </div>
    }

}

export default connect(
    ( state ) => ({ state })
)( ComponentGroup );