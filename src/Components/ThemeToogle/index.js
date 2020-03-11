import React, { useContext } from 'react';
import {ThemeContext} from '../../Contexts/ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>Toogle the theme</button>
     );
}
 
export default ThemeToggle;