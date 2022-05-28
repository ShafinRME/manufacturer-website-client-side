import React from 'react';
import Banner from './Banner';
import Bundle from './Bundle';
import FAQ from './FAQ';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Bundle></Bundle>
            <Reviews></Reviews>
            <FAQ></FAQ>
            <Summary></Summary>
        </div>
    );
};

export default Home;