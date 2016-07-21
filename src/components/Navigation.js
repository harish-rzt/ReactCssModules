import React from 'react';
import styles from './Navigation.css';
import iconStyles from '../font/flaticon/flaticon.css';


const NavItem = ({ title, isActive, icon }) => {
    return (<a href="#" className={ `${styles.link} ${isActive ? styles.active : ''}` }>
    <span className={ styles.linkIcon + " " + iconStyles[icon] } />
    <span className={ styles.linkTitle }>{ title }</span>
    </a>);
};

export default class Navigation extends React.Component {
    render() {
        return <nav className={ styles.root }>
            <NavItem title="Explorer" icon="flaticon-file" />
            <NavItem title="Designer" icon="flaticon-interface" />
            <NavItem title="Infrastructure" icon="flaticon-connection" isActive="true" />
            <NavItem title="Notebook" icon="flaticon-multimedia" />
        </nav>
    }
};