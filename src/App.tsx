import React, { useState } from 'react';
import Editor from './components/Editor';
import Home from './components/Home';
import { Routes , Route } from 'react-router-dom';
import './index.css'
const App: React.FC = () => {
    return (
        <div className = "App">
            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/editor" element = {<Editor/>} />
            </Routes>
        </div>
    );
}

export default App;