import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Navbar from '../Navbar';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <Navbar />
        <MainSection />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;