import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
    state = { 
        isLightTheme :  true,
        light : { color : '#555', ui : '#ddd', bg : "#eee" },
        dark : { color : '#ddd', ui : '#333', bg : "#000" }
    }

    toogleTheme = () => {
        this.setState({ isLightTheme : !this.state.isLightTheme })
    }

    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toogleTheme: this.toogleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;