import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateEvent from './components/CreateEvent/CreateEvent';

export const UseContext = React.createContext()
const App = () => {

    const [eventDetails, setEventDetails] = useState({})
    console.log(eventDetails)
    const state={
        setEventDetails,
        eventDetails
    }
    return (
        <UseContext.Provider value={state}>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/create" element={<CreateEvent />} />
           </Routes>
        </UseContext.Provider>
    );
};

export default App;