import React, { Component } from 'react';
import  {ThemeContext} from '../../Contexts/ThemeContext';
import { AuthContext } from '../../Contexts/AuthContext';

class Navbar extends Component {
  render() { 
    console.log(this.context)

    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themecontext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themecontext;
          const theme = isLightTheme ? light : dark;
          return(
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
          )
        }}
        </ThemeContext.Consumer>
      )}

      </AuthContext.Consumer>
    );
  }
}
 
export default Navbar;