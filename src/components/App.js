import React from 'react';
import {connect} from 'react-redux';
import ComponentBlock from './ComponentBlock';
import {getComponents} from '../actions';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        console.log("props", this.props)
        this.props.dispatch(getComponents());
    }

    render() {
        console.log("state", this.props.state)
        return <div>
            {this.props.state.map(component=>(<ComponentBlock data={component} key={component.name}/>))}
        </div>;
    }
}

export default connect(
    (state)=>({state})
)(App);



