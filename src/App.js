import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <HomePage />
                <AboutPage />
                <ContactPage />
            </main>
            <Footer />
        </div>
    );
};

export default App;
