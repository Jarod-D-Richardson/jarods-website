import type { Component } from 'solid-js';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import './App.css'


const App: Component = () => {
    return (
        <>
            <div class="app">
                <Header/>
                <Home />
                <About />
            </div>
        </>
    );
};

export default App;
