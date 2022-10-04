import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateEvent from './components/CreateEvent/CreateEvent';
import Event from './components/Event/Event'
export const UseContext = React.createContext()
const App = () => {

    const [eventDetails, setEventDetails] = useState({})

    const state={
        setEventDetails,
        eventDetails
    }
    return (
        <UseContext.Provider value={state}>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/event" element={<Event />} />
           </Routes>
        </UseContext.Provider>
    );
};

export default App;