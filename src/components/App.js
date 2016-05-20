import React from 'react';
import Page from './Page';
import Sidebar from './Sidebar';
import styles from './App.css';
import { clearfix } from '../global.css';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log("state", this.props.state);
        return <div className={ styles.root + " " + clearfix }>
            <Sidebar />
            <Page />
        </div>;
    }
    
}



