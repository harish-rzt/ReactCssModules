import React from 'react';
import styles from './Sidebar.css';
import Navigation from './Navigation';
import ButtonGroup from './ButtonGroup';
import { fLeft } from '../global.css';

const Logo = ({ logoPath }) => (
    <a href="#"
       className={ styles.logo }
       style={{ backgroundImage: logoPath }} />
);

export default class Sidebar extends React.Component {
    render() {
        return <div className={ styles.root + " " + fLeft }>
            <Logo />
            <Navigation />
            <ButtonGroup />
        </div>
    }
}