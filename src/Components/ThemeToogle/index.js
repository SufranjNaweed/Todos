import React, { Component } from 'react';
import {ThemeContext} from '../../Contexts/ThemeContext';

class ThemeToggle extends Component {
    state = {  }
    static contextType = ThemeContext;
    
    render() {
        const {toogleTheme} = this.context;
        return (
            <button onClick={toogleTheme}>Toogle the theme</button>
        );
    }
}
 
export default ThemeToggle;