import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books , setBooks] = useState([
        {title : 'name 1', id : 1},
        {title : 'name 2', id : 2},
        {title : 'name 3', id : 3},
        {title : 'name 4', id : 4},
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;