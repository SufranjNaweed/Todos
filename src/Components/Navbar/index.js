import React, { useContext } from 'react';
import  {ThemeContext} from '../../Contexts/ThemeContext';
import { AuthContext } from '../../Contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return ( 
    <nav style={{ 
      background : theme.bg, 
      color : theme.color
    }}
    >
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ?  'Logged In' :  'Logged Out'}
      </div>
      <ul>
        <li style={{background : theme.ui }}>Home</li>
        <li style={{background : theme.ui }}>About</li>
        <li style={{background : theme.ui }}>Contact</li>
      </ul>
    </nav>
   );
}
 
export default Navbar;
 