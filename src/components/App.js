import React from 'react';
import ComponentBlock from './ComponentBlock';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <ComponentBlock/>
        </div>;
    }
}

