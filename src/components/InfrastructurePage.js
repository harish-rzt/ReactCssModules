import React from 'react';
import Tab from './Tab';
import SoftwareComponents from './SoftwareComponents';
import styles from './InfrastructurePage.css';

const Header = () => (
    <div className={ styles.header }>
        <TabGroup />
    </div>
);

const TabGroup = () => (
    <div className={ styles.tabGroup }>
        <Tab title="Software Components"
             borderColor="#37A5E4"
             textColor="#fff"/>
        <Tab title="Infrastructure" />
    </div>
);

export default class InfrastructurePage extends React.Component {
    render () {
        return <div className={ styles.root }>
            <Header />
            <SoftwareComponents />
        </div>
    }
}