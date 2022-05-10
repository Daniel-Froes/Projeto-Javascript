import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/home'

const RoutesPath = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    
)

export default RoutesPath;