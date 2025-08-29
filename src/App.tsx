import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Location from './components/Location';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Schedule />
                <Speakers />
                <Location />
                <Registration />
            </main>
            <Footer />
        </div>
    );
}

export default App;